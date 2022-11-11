import { AutoMap } from '@automapper/classes';
import { Aired } from './aired';
import { Broadcast } from './broadcast';
import { Demographic } from './demographic';
import { Genre } from './genre';
import { Images } from './images';
import { Theme } from './theme';
import { Title } from './title';
import { Trailer } from './trailer';

export class MalData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  @AutoMap(() => [Title])
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: false;
  @AutoMap(() => Aired)
  aired: Aired;
  duration: string;
  rating: string;
  score?: number;
  scored_by: string;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year?: number;
  broadcast: Broadcast;
  producers: any[];
  licensors: any[];
  studios: any[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Theme[];
  demographics: Demographic[];
}
