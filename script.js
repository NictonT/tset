// Load the Excel file from the server or local folder
function loadExcelFile(url) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            displayBooks(jsonData);
        })
        .catch(error => console.error('Error fetching the Excel file:', error));
}

// Function to display books in the table
function displayBooks(books) {
    const tableBody = document.querySelector('#booksTable tbody');
    tableBody.innerHTML = ''; // Clear any previous rows

    books.forEach(book => {
        const row = document.createElement('tr');

        // Book Name
        const nameCell = document.createElement('td');
        nameCell.textContent = book['book name'] || 'N/A';
        row.appendChild(nameCell);

        // Author
        const authorCell = document.createElement('td');
        authorCell.textContent = book['author'] || 'N/A';
        row.appendChild(authorCell);

        // Status
        const statusCell = document.createElement('td');
        statusCell.textContent = book['status'] || 'N/A';
        row.appendChild(statusCell);

        // Category
        const categoryCell = document.createElement('td');
        categoryCell.textContent = book['category'] || 'N/A';
        row.appendChild(categoryCell);

        // Age
        const ageCell = document.createElement('td');
        ageCell.textContent = book['age'] || 'N/A';
        row.appendChild(ageCell);

        // Description
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = book['description'] || 'N/A';
        row.appendChild(descriptionCell);

        // Language
        const langCell = document.createElement('td');
        langCell.textContent = book['language'] || 'N/A';
        row.appendChild(langCell);

        // Price
        const priceCell = document.createElement('td');
        priceCell.textContent = book['price'] || 'N/A';
        row.appendChild(priceCell);

        // ISBN 10
        const isbn10Cell = document.createElement('td');
        isbn10Cell.textContent = book['ISBN 10'] || 'N/A';
        row.appendChild(isbn10Cell);

        // ISBN 13
        const isbn13Cell = document.createElement('td');
        isbn13Cell.textContent = book['ISBN 13'] || 'N/A';
        row.appendChild(isbn13Cell);

        // Papers
        const papersCell = document.createElement('td');
        papersCell.textContent = book['papers'] || 'N/A';
        row.appendChild(papersCell);

        // Publishing Date
        const dateCell = document.createElement('td');
        dateCell.textContent = book['publishing date'] || 'N/A';
        row.appendChild(dateCell);

        tableBody.appendChild(row);
    });
}

// Load the Excel file and display its contents
loadExcelFile('Book 1.xlsx');
