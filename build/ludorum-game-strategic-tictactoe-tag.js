(function (init) { "use strict";
			this["ludorum-game-strategic-tictactoe"] = init(this.base,this.Sermat,this.ludorum);
		}).call(this,/** Package wrapper and layout.
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

/** # Strategic TicTacToe
*/
var StrategicTicTacToe = exports.StrategicTicTacToe = declare(ludorum.Game, {
	constructor: function StrategicTicTacToe() {
		ludorum.Game.call(this, "Xs"); //FIXME Poner el jugador activo.
	},
	
	players: ["Xs", "Os"],
	
	/** Si el juego terminó, retorna un objeto de la forma {Xs:1,Os:-1}; y sino `null`.
	*/
	result: function result() {
		//TODO
	},
	
	/** Si el juego terminó retorna null; sino retorna un objeto con el jugador activo y una lista
	de movimientos, e.g. {Xs: [....]}.
	*/
	moves: function moves() {
		//TODO
	},
	
	/** Toma un objeto con los movimientos de cada jugador, y retorna un nuevo estado juego con los
	movimientos ejecutados.
	*/
	next: function next(move) {
		//TODO
	}	
}); // declare StrategicTicTacToe

// See __prologue__.js
	return exports;
});
//# sourceMappingURL=ludorum-game-strategic-tictactoe-tag.js.map