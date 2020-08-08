import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Define a tupple represents a row of CSV file (a match)
type MatchData = [Date, string, string, number, number, MatchResult, string];

// Give a copy of MatchReader
// that extends CsvFileReader class
// which have been customized to work with MatchData
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): any {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
