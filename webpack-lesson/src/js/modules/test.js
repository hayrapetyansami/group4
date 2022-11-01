const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

export function arr () {
	return [...arr1, arr2];
}

export default function (name) {
	console.log(`Hello, my name is ${name}`);
};