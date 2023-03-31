import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DraftService {

  public testDraftOptions: Array<DraftOptions> = [
    { draftName: 'Uprising', 
      draftItems: [
        {itemName:'Orcs', itemCategory:'Faction'}, 
        {itemName:'Elves', itemCategory:'Faction'}, 
        {itemName:'Dwarves', itemCategory:'Faction'}, 
        {itemName:'Undead', itemCategory:'Faction'},
        {itemName:'Templar', itemCategory:'Faction'},
        {itemName:'Druid', itemCategory:'Hero'}, 
        {itemName:'Gorgon', itemCategory:'Hero'}, 
        {itemName:'Cultist', itemCategory:'Hero'}, 
        {itemName:'Demon Lord', itemCategory:'Hero'}, 
        {itemName:'Hill Giant', itemCategory:'Hero'},
      ],
      draftItemCategories: ['Faction', 'Hero'],
      picksPerPlayer: 2,
      randomDraftItems: false,
      randomDraftOrder: false,
      useItemCategories: true, 
      snakeDraft: false, 
      numberOfPlayers: 4, 
      teamDraft: true 
    },
    { draftName: 'Everdel', 
      draftItems: [{itemName:'Birds'}, {itemName:'Badgers'}, {itemName:'Frogs'}, {itemName:'Moles'}, {itemName:'Rats'}, {itemName:'Mice'}],
      draftItemCategories: new Array<string>(),
      picksPerPlayer: 1, 
      randomDraftItems: false,
      randomDraftOrder: false,
      useItemCategories: false, 
      snakeDraft: true, 
      numberOfPlayers: 6, 
      teamDraft: true 
    },
  ]

  // public savedDraftLists = new Array<DraftOptions>();
  public savedDraftLists = this.testDraftOptions;
  public selectedDraft: DraftOptions = this.defaultDraftOptions();
  public players: Map<number,Player> = new Map<number,Player>()
  public draftSteps: Array<Player> = new Array<Player>();

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
      randomDraftOrder: false,
      useItemCategories: false,
      draftItemCategories: new Array<string>(),
      draftItems: new Array<DraftItem>(),
    }
  }
}

export interface Player {
  playerNumber: number;
  team?: number;
  draftPicks?: Array<DraftItem>;
}

export interface DraftItem {
  itemName: string,
  itemCategory?: string,
}

export interface DraftOptions {
  draftName: string;
  numberOfPlayers: number,
  picksPerPlayer: number,
  snakeDraft: boolean,
  teamDraft: boolean,
  randomDraftItems: boolean,
  randomDraftOrder: boolean,
  useItemCategories: boolean,
  draftItemCategories: Array<string>,
  draftItems: Array<DraftItem>,
}
