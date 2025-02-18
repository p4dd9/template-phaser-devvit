import { Game } from 'phaser'
import { PostMessageManager } from './events/PostMessageManager'
import { gameConfig } from './game.config'

PostMessageManager.registerEvents()
new Game(gameConfig)
