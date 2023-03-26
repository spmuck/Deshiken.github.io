import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DraftService {

  public testDraftOptions: Array<DraftOptions> = [
    { draftName: 'Uprising', choiceList: ['Orcs', 'Elves', 'Dwarves', 'Templar'], picksPerPlayer: 1,randomDraftItems: false,
      useItemCategories: false, snakeDraft: false, numberOfPlayers: 4, teamDraft: false 
    },
    { draftName: 'Everdel', choiceList: ['Birds', 'Badgers', 'Frogs', 'Moles', 'Rats', 'Mice'], picksPerPlayer: 2, randomDraftItems: false,
      useItemCategories: false, snakeDraft: true, numberOfPlayers: 6, teamDraft: true },
  ]
  // public savedDraftLists = new Array<DraftOptions>();
  public savedDraftLists = this.testDraftOptions;
  public selectedDraft: DraftOptions = this.defaultDraftOptions();

  public players: Array<Player> = new Array<Player>()

  constructor() { 
    let localStorageString = localStorage.getItem('savedDraftList');
    if (typeof localStorageString === 'string') {
      // If options are found in local storage, merge them with the default options, overlaying the defaults with the options from local storage.
      this.savedDraftLists = JSON.parse(localStorageString) as Array<DraftOptions>;
    } 
  }

  private defaultDraftOptions(): DraftOptions {
    return {
      draftName: '',
      numberOfPlayers: 4,
      picksPerPlayer: 1,
      snakeDraft: true,
      teamDraft: true,
      randomDraftItems: false,
      useItemCategories: false,
      choiceList: []
    }
  }
}

export interface Player {
  playerNumber: number;
  team: number;
  pick: string;
}

export interface DraftOptions {
  draftName: string;
  numberOfPlayers: number,
  picksPerPlayer: number,
  snakeDraft: boolean,
  teamDraft: boolean,
  randomDraftItems: boolean,
  useItemCategories: boolean,
  choiceList: Array<string>
}
