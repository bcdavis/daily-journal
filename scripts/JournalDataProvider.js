/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Content"
    }, 
    {
        id: 2,
        date: "07/25/2025",
        concept: "HTML & CSS",
        entry: "Presented our second project 'automated world', Zach, Terra, and I.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "07/26/2025",
        concept: "HTML & CSS",
        entry: "Had a one on one with Brenda about how I feel about the class so far. Also, lab time all day.",
        mood: "Bored"
    }
 
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}