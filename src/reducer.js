export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQB95IcrJJyt-DejNBc8KNQ64KieBpdJOv8xD2tnrOr-a9M2ljd9A5vj25U5RtZJnScMde_PDwE7joNn-oGIsc_xa7kI7EsbkSyYLG0n5z_R1C9U5HD70jWITxdD54RmlF0JWbHWbDg3r_0x8TQM59EDSF7y6UgQ-ExdOh7dzg'
    ,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default reducer