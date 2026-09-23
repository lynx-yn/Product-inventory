// store all products 
let users = [] 

if(sessionStorage.getItem("users")){ 
    users = JSON.parse(sessionStorage.getItem("users")) 
    displayUserList() 
} 


// ADD PRODUCT

userForm.addEventListener('submit', (event) => { 

    event.preventDefault() 

    // add product to the product array 
    const prdIdInput = proid.value 
    const prdnameInput = proname.value 
    const categoryInput = category.value 
    const priceInput = price.value 
    const quantityInput = quantity.value 
     
    console.log(prdIdInput, prdnameInput, categoryInput, priceInput, quantityInput); 
 
    // add product to array 
    if (prdIdInput && prdnameInput && categoryInput && priceInput && quantityInput) { 

        const editindex = editstatus.value 

        if (editindex == "") { 

            users.push({ 
                proid: prdIdInput, 
                proname: prdnameInput, 
                category: categoryInput, 
                price: priceInput, 
                quantity: quantityInput 
            }) 

            console.log(users); 
 
        } else { 

            users[editindex] = { 
                proid: prdIdInput, 
                proname: prdnameInput, 
                category: categoryInput, 
                price: priceInput, 
                quantity: quantityInput 
            } 

        } 
 
    } else { 

        alert("please fill the form completly") 

    } 

    userForm.reset() 
    editstatus.value = ""

    sessionStorage.setItem("users", JSON.stringify(users)) 
    displayUserList() 

}) 



// DISPLAY PRODUCTS

function displayUserList() { 

    tableBody.innerHTML ="" 

    users.forEach((item, index)=> { 

        tableBody.innerHTML += ` 

        <tr> 

                <td>${index+1}</td> 

                <td>${item.proid}</td> 

                <td>${item.proname}</td> 

                <td>${item.category}</td> 

                <td>${item.price}</td> 

                <td>${item.quantity}</td> 

                <td> 

                    <button onclick="editUser(${index})" 
                        class="btn btn-warning">
                        Edit
                    </button> 

                    <button onclick="deleteUser(${index})" 
                        class="btn btn-danger">
                        Delete
                    </button> 

                </td> 

            </tr> 

        ` 

    }) 

} 



// EDIT PRODUCT 

function editUser(userindex){ 

    const userdetails = users[userindex] 

    console.log(userdetails); 

    proid.value = userdetails.proid 
    proname.value = userdetails.proname 
    category.value = userdetails.category 
    price.value = userdetails.price 
    quantity.value = userdetails.quantity 

    editstatus.value = userindex 
     
} 



// DELETE PRODUCT 

function deleteUser(userindex) { 

    if(confirm("are you sure ,you want to delete the data")){ 

        users.splice(userindex,1) 

        sessionStorage.setItem("users", JSON.stringify(users)) 

        displayUserList() 

    } 
     
}



// SEARCH PRODUCT

search.addEventListener('keyup', () => {

    const searchValue = search.value.toLowerCase()

    tableBody.innerHTML = ""

    users.forEach((item, index) => {

        if(item.proname.toLowerCase().includes(searchValue)) {

            tableBody.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${item.proid}</td>

                <td>${item.proname}</td>

                <td>${item.category}</td>

                <td>${item.price}</td>

                <td>${item.quantity}</td>

                <td>

                    <button onclick="editUser(${index})"
                        class="btn btn-warning">
                        Edit
                    </button>

                    <button onclick="deleteUser(${index})"
                        class="btn btn-danger">
                        Delete
                    </button>

                </td>

            </tr>

            `

        }

    })

})



// CATEGORY FILTER

categoryFilter.addEventListener('change', () => {

    const selectedCategory = categoryFilter.value

    tableBody.innerHTML = ""

    users.forEach((item, index) => {

        if(selectedCategory == "" || item.category == selectedCategory) {

            tableBody.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${item.proid}</td>

                <td>${item.proname}</td>

                <td>${item.category}</td>

                <td>${item.price}</td>

                <td>${item.quantity}</td>

                <td>

                    <button onclick="editUser(${index})"
                        class="btn btn-warning">
                        Edit
                    </button>

                    <button onclick="deleteUser(${index})"
                        class="btn btn-danger">
                        Delete
                    </button>

                </td>

            </tr>

            `

        }

    })

})