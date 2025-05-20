const heroes = ["ironman", "thor", "spiderman"];

const nhs = heroes.map((hero): string => {
	return hero;
});

function createUser(id: string, { name: string, isPaid: boolean }) {}

const newUser =  { name: "s", isPaid: true, email: "s@s.com"}

createUser("", newUser);

function getDBId(id: string | number) {
  if(typeof id === "string") {
    id.toUpperCase()
  } else {
    id.toFixed()
  }
}

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE
