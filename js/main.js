var inputs = $('input').not(':submit');

inputs.on('input', function(idx) {
	$(inputs[inputs.index(this)]).toggleClass('input-selected', this.value > '');
});

inputs[0].focus();