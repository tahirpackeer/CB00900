function updateSummaryTable() {
    // Get the form values
    const name = document.getElementById('Name').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('genderSelect').value;
  
    // Create the summary table HTML
    const summaryTableHTML = `
      <table border="1" id="sumtabl" >
      <th>Summary</th>
        <tr>
          <td>Full Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td>Mobile Number:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>${gender}</td>
        </tr>
      </table>
    `;
  
    // Display the summary table
    document.getElementById('summaryTableContainer').innerHTML = summaryTableHTML;
  }
  
  // Listen for changes in the input fields and update the summary table
  document.getElementById('detailsForm').addEventListener('input', updateSummaryTable);