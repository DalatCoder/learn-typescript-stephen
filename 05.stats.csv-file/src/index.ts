import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const analysis = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
analysis.buildAndPrintReport(matchReader.matches);
