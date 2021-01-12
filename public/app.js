document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
	}
});

//NOTE: Updating 
const devouredBtn = document.querySelectorAll(".devourBtn");

if (devouredBtn) {
	devouredBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();

			const id = e.target.getAttribute("burgerID");
			const noBurger = {
				devoured: true,
			};
			console.log(id);

			fetch(`/api/burgers/${id}`, {
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},

				body: JSON.stringify(noBurger),
			}).then((response) => {
				if (response.ok) {
					location.reload("/");
				} else {
					alert("Something went wrong!");
				}
			});
		});
	});
}

//NOTE: Insert another burger
const addBurgerBtn = document.getElementById("addButtonBtn");

if (addBurgerBtn) {
	addBurgerBtn.addEventListener("submit", (e) => {
		e.preventDefault();

		const burgerName = document.getElementById("burgerName").value.trim();
		const addNewBurger = {
			burger_name: burgerName,
		};

		fetch("/api/burgers", {
			method: "POST",
			headers: {
				Accept: "application/json",
                "Content-Type": "application/json",
            },
			body: JSON.stringify(addNewBurger),
		}).then((response) => {
			if (response.ok) {
				console.log("Burger added!");
				location.reload();
			} else {
				alert("Something went wrong!");
			}
		});
	});
}

//NOTE: Delete burger
