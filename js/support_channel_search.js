
// 全角入力を強制的に半角入力にする
(() => {
	const codeToKeyMap = {
		"Minus": "-",
		"IntlRo": "_"
	};
	for (let i = 0; i < 10; i++) {
		codeToKeyMap[`Digit${i}`] = i.toString();
	}
	"abcdefghijklmnopqrstuvwxyz".split("").forEach(char => {
		codeToKeyMap[`Key${char.toUpperCase()}`] = char;
	});

	document.addEventListener("keydown", evt => {
		if (evt.target.getAttribute("data-qa") !== "jumper_input") return;
		if (evt.key !== "Process") return;
		const code = evt.code;
		const key = codeToKeyMap[code];
		if (!key) return;

		const input = evt.target;
		const currentValue = input.value;
		const selectionStart = input.selectionStart;
		const selectionEnd = input.selectionEnd;
		input.value = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionEnd);
		input.selectionStart = input.selectionEnd = selectionStart + 1;
		evt.preventDefault();
	});
})();
