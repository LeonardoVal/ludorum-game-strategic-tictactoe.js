(function (global, init) { "use strict";
	var DEPENDENCIES = ['creatartis-base', 'sermat', 'ludorum'];
	if (typeof define === 'function' && define.amd) {
		define(DEPENDENCIES, init); // AMD module.
	} else if (typeof exports === 'object' && module.exports) {
		module.exports = init.apply(this, DEPENDENCIES.map(require)); // CommonJS module.
	} else {
		global.ludorum_wargame = init(global.base, global.Sermat, global.ludorum); // Browser.
	}
})(this,/** Module wrapper and layout.
*/
function __init__(base, Sermat, ludorum) { "use strict";
/** Import synonyms */
	var declare = base.declare,
		iterable = base.iterable,
		Iterable = base.Iterable,
		initialize = base.initialize;
	
/** Library layout. */
	var exports = {
			__package__: 'ludorum-strategic-tictactoe',
			__name__: 'ludorum_strategic_tictactoe',
			__init__: __init__,
			__dependencies__: [base, Sermat, ludorum],
			__SERMAT__: { include: [base, ludorum] }
		};
	
/** See `__epilogue__.js`.
*/

/** See __prologue__.js
*/
	[ //TODO Add serializable classes.
	].forEach(function (type) {
		type.__SERMAT__.identifier = exports.__package__ +'.'+ type.__SERMAT__.identifier;
		exports.__SERMAT__.include.push(type);
	});
	Sermat.include(exports);
	return exports;
});
//# sourceMappingURL=ludorum-strategic-tictactoe.js.map