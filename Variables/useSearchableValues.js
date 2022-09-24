// WRITE CLEAN CODE #1 Variables

// Use searchable values

// DON'T

// no one knows what are these numbers
const workingDaysInMonth = () => {
    return 5 * 4;
}

// DO

// your hardcoded vars should be capitalized
const WEEKS_IN_MONTH = 4;
const WORKING_DAYS = 5; 

const workingDaysInMonth = () => WORKING_DAYS * WEEKS_IN_MONTH;

// GENERAL RULES
// use searchable names, simple as that;