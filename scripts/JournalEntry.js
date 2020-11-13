/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            <div class="entry-top">
                <div class="entry-top-dateBox">
                    <p class="entry-top-item entry-date">${entryObj.date}</p>
                </div>
                <div class="entry-top-extras">

                    <p class="entry-top-item entry-concepts">${entryObj.concept}</p>
                    <p class="entry-top-item entry-mood">${entryObj.mood}</p>
                </div>
            </div>
            <div class="entry-bottom">
                <p class="entry-bottom-item entry-text">${entryObj.entry}</p>
            </div>
        </section>
    `
}