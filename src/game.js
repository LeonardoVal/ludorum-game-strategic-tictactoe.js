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