"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtlmReport_1 = require("./reportTargets/HtlmReport");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var matches = matchReader.matches;
/*
const analysis = new Summary(
  new WinAnalysis('Man United'),
  new ConsoleReport()
);
*/
var analysis = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Man United'), new HtlmReport_1.HtmlReport());
analysis.buildAndPrintReport(matches);
