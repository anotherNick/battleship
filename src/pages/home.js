export default function homePage() {

    const fragment = document.createDocumentFragment();

    const welcomeDiv = document.createElement('div');
          welcomeDiv.className = 'welcome';
    
    const welcomePara = document.createElement('p');
          welcomePara.innerHTML = 'Welcome to <strong>The Cauldron</strong>, a private cafeteria at Steimling Technologies Inc. (Definitely not an evil syndicate masquerading as a Corporation).\n\nShow your badge at checkout for our company discount. Free drink refills for henchmen* on Tuesdays and Thursdays.';
    
    const welcomeParaFN = document.createElement('span');
          welcomeParaFN.className = 'footnote';
          welcomeParaFN.textContent = "* Must be a henchman to an active account holder. Past henchmen pay full price.";

    welcomePara.append(welcomeParaFN);
    welcomeDiv.append(welcomePara);
    fragment.append(welcomeDiv);

    const table = document.createElement('table');
          table.id = "hours-of-operation";
          
    const caption = document.createElement('caption');

    const tableTitle = document.createElement('h2');
          tableTitle.textContent = "Hours of Operation";

    caption.append(tableTitle);
    table.append(caption);

    const thead = document.createElement('thead');

    const headerRow = document.createElement('tr');
          headerRow.id = "table-headers";

    const weekdayHeadings = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    weekdayHeadings.forEach((item) => {
        const heading = document.createElement('th');
              heading.scope = 'col';
              heading.textContent = item;

        headerRow.append(heading);
    });

    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement('tbody');

    const row1 = document.createElement('tr');
    
    const row1Header = document.createElement('th');
          row1Header.scope = 'row';
          row1Header.textContent = 'First Shift';

    row1.append(row1Header);

    const row1Data = ['10:30am - 12pm','10:30am - 12pm','10:30am - 12pm','10:30am - 12pm','10:30am - 12pm','12pm - 1:30pm','12pm - 1:30pm'];

    row1Data.forEach((item) => {
        const td = document.createElement('td');
              td.textContent = item;

        row1.append(td);
    });

    tbody.append(row1);
          
    const row2 = document.createElement('tr');
    
    const row2Header = document.createElement('th');
          row2Header.scope = 'row';
          row2Header.textContent = 'Second Shift';

    row2.append(row2Header);

    const row2Data = ['5:30am - 7pm','5:30am - 7pm','5:30am - 7pm','5:30am - 7pm','5:30am - 7pm','12am - 1:30am','12am - 1:30am'];

    row2Data.forEach((item) => {
        const td = document.createElement('td');
              td.textContent = item;

        row2.append(td);
    });

    tbody.append(row2);
          
    const row3 = document.createElement('tr');
    
    const row3Header = document.createElement('th');
          row3Header.scope = 'row';
          row3Header.textContent = 'Graveyard Shift';

    row3.append(row3Header);

    const row3Data = ['12:30am - 2am','12:30am - 2am','12:30am - 2am','12:30am - 2am','12:30am - 2am','N/A','N/A'];

    row3Data.forEach((item) => {
        const td = document.createElement('td');
              td.textContent = item;

        row3.append(td);
    });

    tbody.append(row3);
    table.append(tbody);      
    fragment.append(table);

    return fragment;

}