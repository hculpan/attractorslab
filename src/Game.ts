export class Game {
    private canvas: HTMLCanvasElement;

    private x: number = 1;
    private y: number = 1;

    private _isRunning: boolean = false;

    private _intervalId: any;

    constructor() {
    }

    initCanvas(): void {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        let context = this.canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    get isRunning(): boolean {
        return this._isRunning;
    }

    stopGame(): void {
        if (!this.isRunning) return;
        let button: HTMLInputElement = <HTMLInputElement>document.getElementById("start-btn");
        button.disabled = false;
        button = <HTMLInputElement>document.getElementById("stop-btn");
        button.disabled = true;
        button = <HTMLInputElement>document.getElementById("pause-btn");
        button.disabled = true;
        
        this._isRunning = false;
        window.clearInterval(this._intervalId);
        this.x = 1;
        this.y = 1;
        let context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    pauseGame(): void {
        if (!this.isRunning) return;
        let button: HTMLInputElement = <HTMLInputElement>document.getElementById("start-btn");
        button.disabled = false;
        button = <HTMLInputElement>document.getElementById("stop-btn");
        button.disabled = true;
        button = <HTMLInputElement>document.getElementById("pause-btn");
        button.disabled = true;
        
        this._isRunning = false;
        window.clearInterval(this._intervalId);
    }

    startGame(): void {
        if (this.isRunning) return;
        let button: HTMLInputElement = <HTMLInputElement>document.getElementById("start-btn");
        button.disabled = true;
        button = <HTMLInputElement>document.getElementById("stop-btn");
        button.disabled = false;
        button = <HTMLInputElement>document.getElementById("pause-btn");
        button.disabled = false;

        this._isRunning = true;
        this._intervalId = window.setInterval(this.drawFrame, 1, this);
    }

    drawFrame(game: Game): void {
        let context = game.canvas.getContext('2d');
        context.clearRect(game.x, game.y, 25, 25);

        game.x += 2;
        if (game.x > game.canvas.width) {
            game.x = 1;
        }

        game.y += 2;
        if (game.y > game.canvas.height) {
            game.y = 1;
        }

        context.fillStyle = "green";
        context.fillRect(game.x, game.y, 25, 25);
    }
}


