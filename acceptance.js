#!/usr/bin/env node
/*
 * acceptance.js
 * Copyright (C) 2022 Martin Užák uzak+git@mailbox.org
 *
 * Distributed under terms of the MIT license.
 *
 * Process acceptance review files of the students. Usage:
 *
 * ./acceptance.js acceptanceReview.md ...
 */

"use strict";

const { parseArgs } = require("node:util");
const fs = require("fs");

const FILE_PAT = /--(?<header>.*)--(?<content>.*)/ms;
const CHAPTER_PAT = /^\s*#\s*(?<chapter>[^#].*)/;
const PROJECT_PAT = /^\s*##\s*(?<project>[^#].*)/;
const TASK_PAT = /(?<task>.*?:?)\s*(?<status>N?OK)/;
const REVIEWED_PAT = /reviewed:\s*(.*)/im;

class OutputLine {
  stats(name, ok, nok, prefix = "") {
    if (name !== undefined) {
      let total = ok + nok;
      let pct = ((ok / total) * 100).toFixed(2);
      console.log(`${prefix} "${name}": ${total} (${ok}/${nok}): ${pct}%`);
    }
  }
}

class Chapter extends OutputLine {
  constructor(name) {
    super();
    this.name = name;
    this.projects = [];
  }
  stats(reviewed, verbose = false) {
    let ok = this.projects.map((p) => p.ok).reduce((a, b) => a + b, 0);
    let nok = this.projects.map((p) => p.nok).reduce((a, b) => a + b, 0);
    super.stats(this.name, ok, nok, reviewed);
    if (verbose) {
      this.projects.forEach((prj) => prj.stats());
    }
  }
}

class Project extends OutputLine {
  constructor(name) {
    super();
    this.name = name;
    this.ok = 0;
    this.nok = 0;
  }

  stats(verbose) {
    super.stats(this.name, this.ok, this.nok, "  PRJ");
  }
}

main();

function parseCliArgs() {
  const {
    values: { verbose },
    positionals,
  } = parseArgs({
    options: {
      verbose: {
        type: "boolean",
        short: "v",
      },
    },
    allowPositionals: true,
  });
  return {
    verbose: verbose,
    fileNames: positionals,
  };
}

function main() {
  const { verbose, fileNames } = parseCliArgs();
  fileNames.forEach((fileName) => {
    let [reviewed, chapters] = processFile(fileName, verbose);
    output(reviewed, chapters, verbose);
  });
}

function processFile(fileName, verbose) {
  const allFile = fs.readFileSync(fileName, "utf-8");
  const {
    groups: { header, content },
  } = FILE_PAT.exec(allFile);

  let result = [];

  let chapter;
  let project;

  content.split(/\r?\n/).forEach((line) => {
    // ignore blank lines
    if (line.trim() === "") {
      return;
    }

    if (CHAPTER_PAT.test(line)) {
      if (chapter) {
        result.push(chapter);
      }

      let name = CHAPTER_PAT.exec(line)[1];
      chapter = new Chapter(name);
    } else if (PROJECT_PAT.test(line)) {
      // previous project stats (finalize project)
      if (project) {
        chapter.projects.push(project);
      }

      let name = PROJECT_PAT.exec(line)[1];
      project = new Project(name);
    } else if (TASK_PAT.test(line)) {
      const {
        groups: { task, status },
      } = TASK_PAT.exec(line);
      if (project) {
        if (status === "OK") {
          project.ok++;
        } else {
          project.nok++;
        }
      }
    } else {
      if (verbose) {
        console.error("Invalid line", line);
      }
    }
  });

  chapter.projects.push(project);
  result.push(chapter);
  let reviewed = REVIEWED_PAT.exec(header)[1];

  return [reviewed, result];
}

function output(reviewed, chapters, verbose=false) {
  chapters.forEach((chapter) => {
    chapter.stats(reviewed, verbose);
  });
}
