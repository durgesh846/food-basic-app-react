
const useOnlineStatus = () =>{
    window.addEventListener("offline", (event) => {
        return false;
    });
    return true;
}
export default useOnlineStatus;