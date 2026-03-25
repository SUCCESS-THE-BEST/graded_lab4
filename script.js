let expected = document.getElementById("expected");
let actual = document.getElementById("actual");
let compare = document.getElementById("compare-btn");
let clear = document.getElementById("clear-btn");

compare.addEventListener("click", () => {

    let oldList = document.getElementById("result");
    if (oldList) oldList.remove();

  
    let expectedLines = expected.value.split("\n");
    let actualLines = actual.value.split("\n");

   
    let ol = document.createElement("ol");
    ol.id = "differences";

    let differences = [];

    //here i  Check  the line count difference and use the push function to add thme to my array
    if (expectedLines.length !== actualLines.length) {
        differences.push(`Number of lines differ > Expected: ${expectedLines.length}, < Actual: ${actualLines.length}`);
    }

    // here the code is to calculate the mini list length after pushing from above. 
    let minLen = Math.min(expectedLines.length, actualLines.length);
    for (let i = 0; i < minLen; i++) {
        if (expectedLines[i] !== actualLines[i]) {
            differences.push(`Line ${i + 1} differs > Expected: "${expectedLines[i]}", < Actual: "${actualLines[i]}"`);
        }
    }

 
    if (differences.length) {
        ol.classList.add("change");

        
        let diff_list = document.createElement("li");
        diff_list.textContent = "Texts are different";
        ol.appendChild(diff_list);

      
        differences.forEach(text => {
            let li = document.createElement("li");
            li.textContent = text;
            ol.appendChild(li);
        });
    } else {
        ol.classList.add("nochange");
        let li = document.createElement("li");
        li.textContent = "No differences found";
        ol.appendChild(li);
    }

  
    document.getElementById("compare-area").appendChild(ol);
});


clear.addEventListener("click", function() {
    var oldList = document.getElementById("differences");
    if (oldList) {
        oldList.parentNode.removeChild(oldList);
    }
    actual.value = "";
    expected.value = "";
});