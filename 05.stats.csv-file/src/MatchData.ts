import { MatchResult } from './MatchResult';

// Define a tupple represents a row of CSV file (a match)
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
