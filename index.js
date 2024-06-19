let myLeads = []
//let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById ("ul-el")
//let inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
//console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${Leads[i]}'>
            ${Leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //ulEl.textContent += myLeads[i] + " "
    //console.log = myLeads[i];
    /*const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
}

deleteBtn.addEventListener("dblclick", function(){
    //console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})


