import { join, dirname } from 'path'
import { Low, JSONFile, Memory } from 'lowdb'
import { fileURLToPath } from 'url'
import type { Program } from './types';

type Data = {
  programs: Program[]
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json')
const adapter = new JSONFile<Data>(file)
export const db = new Low(adapter)
