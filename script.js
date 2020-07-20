// Access the add order button
const addOrder = document.querySelector('.add-order');
// Call the inner and the outer modal
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

// Inserting the html here for the form 
const openModal = event => {
	console.log(event);
	outerModal.classList.add('open');
	const myHTML = `
	<form>
		<p>Your name :</p>
		<input
			class="input-form"
			type="text"
			id="name"
			name="name"
			placeholder="Enter your name here"
			required/>
		<p>Please select your dish :</p>
		<select name="dish" class="select-form" required>
			<option value="romazava">Romazava</option>
			<option value="koba">Koba</option>
			<option value="ravitoto">Ravitoto</option>
			<option value="mokary">Mokary</option>
			<option value="achard">Achard</option>
			<option value="masikita">Masikita</option>
			<option value="sambos">Sambos</option>
			<option value="mofo-baolina">Mofo baolina</option>
			<option value="ranonapango">Ranonapango</option>
		</select>
		<p>Please select the size of your plate :</p>
		<input type="radio" id="small" name="size" value="small" required />
		<label for="small">Small</label><br />
		<input type="radio" id="medium" name="size" value="medium" />
		<label for="medium">Medium</label><br />
		<input type="radio" id="large" name="size" value="large" />
		<label for="large">Large</label><br />
		<p>How many pieces do you want to order?</p>
		<input
			class="input-form"
			type="number"
			id="quantity"
			name="amount"
			placeholder="Enter a number here"
			required/>
		<button class="submitOrder" type="submit">Add this order</button>
	</form>
`;
	innerModal.innerHTML = myHTML;
};
addOrder.addEventListener("click", openModal);

// creating an escaping way by using the escape key
const closeModalWithEscapeKey = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
};
// creating an escaping way by using the window
window.addEventListener('keydown', closeModalWithEscapeKey);
const closeModal = event => {
	const outside = !event.target.closest('.inner-modal');
	if (outside) {
		outerModal.classList.remove('open');
	} 
};
outerModal.addEventListener('click', closeModal);

// const submitOrder = document.querySelector('.submitOrder');
// const orderList = document.querySelector('.order-list');
// const name = document.querySelector('.input-form');

// submitOrder.addEventListener('click', (event) => {
// 	console.log(event);
// 	const mySecHTML = `
// 	<div class="order" data-dish="anamaitso" data-size="large" data-amount="5">
// 		<span class="title">
// 		${name.value}
// 		</span>
// 		<button class="details">Details</button>
// 		<button class="served">Delete order</button>
// 	</div>
// 	`;
// 	orderList.appendChild(mySecHTML);
// });c

const order = document.querySelector('.order');
const deleteButton = document.querySelector('.served');

deleteButton.addEventListener('click', (event) => {
	console.log(event);
	order.classList.add('delelte');
});
