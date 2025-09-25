declare const _Hi5: {
    MESSAGE: {
        INIT_SDK: string;
        LOAD_END: string;
        GAME_START: string;
        GAME_END: string;
        SHOW_RANK: string;
        SHOW_HELP: string;
        SAVE_DATA: string;
        SHOW_MAIN_MENU: string;
        GET_RANK: string;
        GAME_DATA: string;
        START_GAME: string;
        RESTART_GAME: string;
        SOUND: string;
        RANK_DATA: string;
        GAME_SETTINGS: string;
    };
    MainMenuType: {
        GAME_FIRST: string;
        GAME_END: string;
    };
    GameData: {
        high_score: number;
        score: number;
    };
    UserData: {};
    current_time: number;
    callback: any;
    Init_GameData(localGameData: any): void;
    Init_OnMessage(callback: any): void;
    Init_SDK(callback: any, localGameData: any): void;
    _OnMessage(event: any): void;
    getItem(key: any): any;
    setItem(key: any, value: any): void;
    getTime(): any;
    LoadEnd(): void;
    GameStart(): void;
    GameEnd(): void;
    ShowRank(): void;
    ShowHelp(): void;
    GetRank(): void;
    SaveData(): void;
    ShowMainMenu(mode: any): void;
    PostMessage(action: any, data: any): void;
    log(text: any): void;
};
export default _Hi5;
