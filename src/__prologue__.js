/** Package wrapper and layout.
*/
function __init__(base, Sermat, ludorum) { "use strict";
// Import synonyms /////////////////////////////////////////////////////////////////////////////////
	var declare = base.declare,
		iterable = base.iterable,
		Iterable = base.Iterable,
		initialize = base.initialize;
	
// Library layout. /////////////////////////////////////////////////////////////////////////////////
	var exports = {
		__package__: 'ludorum-strategic-tictactoe',
		__name__: 'ludorum_strategic_tictactoe',
		__init__: __init__,
		__dependencies__: [base, Sermat, ludorum],
		__SERMAT__: { include: [base, ludorum] }
	};
	
// See `__epilogue__.js`.