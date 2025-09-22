const _Hi5 = {
    //
    MESSAGE: {
        //game -> sdk
        INIT_SDK: "INIT_SDK", // 게임 로딩 전 초기화
        LOAD_END: "LOAD_END", // 게임 로딩 끝낫을때 호출 , 초기화
        GAME_START: "GAME_START",
        GAME_END: "GAME_END",
        SHOW_RANK: "SHOW_RANK",
        SHOW_HELP: "SHOW_HELP",
        SAVE_DATA: "SAVE_DATA",
        SHOW_MAIN_MENU: "SHOW_MAIN_MENU",
        GET_RANK: "GET_RANK", // 링킹 정보 요청.
        //sdk -> game
        GAME_DATA: "GAME_DATA", // 게임 정보
        START_GAME: "START_GAME", // 게임시작
        RESTART_GAME: "RESTART_GAME", // 게임 재시작
        SOUND: "SOUND", // 
        RANK_DATA: "RANK_DATA",
    },
    MainMenuType: {
        GAME_FIRST: "GAME_FIRST",
        GAME_END: "GAME_END",
    },
    GameData: {
        high_score: 0, // 최고 점수. [고정]
        score: 0, // 현재 점수. [고정]
        // 기타 데이타
    },
    UserData: {},
    // Hi5Game SDK 통신 Start
    Init_SDK(callback, localGameData) {
        window['Hi5'] = this;
        for (let key in localGameData) {
            this.GameData[key] = localGameData[key];
        }
        // 
        window.addEventListener('message', (event) => {
            if (!event.data)
                return;
            if (!event.data.action)
                return;
            // console.log('Message received:', event.data);
            // console.log('Is trusted:', event.isTrusted);
            if (event.data.action == this.MESSAGE.GAME_DATA) {
                if (event.data.data.game_data) {
                    this.GameData = event.data.data.game_data; //
                }
                if (event.data.data.game_data) {
                    this.UserData = event.data.data.user_data; //
                }
            }
            else if (event.data.action == this.MESSAGE.SOUND) {
                if (event.data.data.sound) {
                    this.GameData.sound = event.data.data.sound; //
                }
                setTimeout(() => {
                    this.SaveData(); //
                }, 100);
            }
            callback(event.data);
        });
        //
        this.PostMessage(this.MESSAGE.INIT_SDK, this.GameData);
    },
    // localStorage
    getItem(key) {
        return this.GameData[key] ?? null;
    },
    setItem(key, value) {
        this.GameData[key] = value;
    },
    //Message_
    LoadEnd() {
        this.PostMessage(this.MESSAGE.LOAD_END, {});
    },
    GameStart() {
        this.PostMessage(this.MESSAGE.GAME_START, {});
    },
    GameEnd() {
        this.PostMessage(this.MESSAGE.GAME_END, {});
    },
    ShowRank() {
        this.PostMessage(this.MESSAGE.SHOW_RANK, {});
    },
    ShowHelp() {
        this.PostMessage(this.MESSAGE.SHOW_HELP, {});
    },
    GetRank() {
        this.PostMessage(this.MESSAGE.GET_RANK, {});
    },
    SaveData() {
        this.PostMessage(this.MESSAGE.SAVE_DATA, this.GameData);
    },
    ShowMainMenu(mode) {
        // this.GameData['score'] = score;
        // this.SaveData();
        setTimeout(() => {
            const _data = {
                mode: mode, // 게임 어느 시점에서 호출햇는지. 게임시작시 game_start, 게임 끝나고 game_end, 기타 other 
            };
            this.PostMessage(this.MESSAGE.SHOW_MAIN_MENU, _data);
        }, 100);
    },
    //
    PostMessage(action, data) {
        window.parent.postMessage({ action: action, data: data }, "*");
    },
    log(text) {
        console.log(`%cGAME: %c${JSON.stringify(text)}`, 'color: yellow;background:black;', 'color: white;background:black;');
    },
    // Hi5Game SDK 통신 End
};
export default _Hi5;
