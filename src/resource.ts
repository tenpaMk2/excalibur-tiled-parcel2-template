import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { ImageSource } from "excalibur";

const mapchipPng = "./roguelikeSheet_transparent.png";
const tiledMapTmx = "./sample-stage.tmx";

export const Resources = {
  mapchip: new ImageSource(mapchipPng),
  tiledmap: new TiledMapResource(tiledMapTmx),
};
