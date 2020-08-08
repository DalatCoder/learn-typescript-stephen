import { CsvFileReader } from './CsvFileReader';
import { MatchReader, DataReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv') as DataReader;
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const matches = matchReader.matches;

const analysis = new Summary(
  new WinAnalysis('Man United'),
  new ConsoleReport()
);

analysis.buildAndPrintReport(matches);
