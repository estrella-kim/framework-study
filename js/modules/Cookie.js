export class COOKIE {
    // 쿠키 가져오기
    getCookie(cname) {
        let name = cname + "=",
            decodedCookie = decodeURIComponent(document.cookie),
            ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // 쿠키유무확인
    checkCookie(target) {
        let id = this.getCookie(target);
        return (id !== '');
    }

    // 쿠키저장할지/아닐지에 대한 처리
    cookieStore(cname, cvalue, expire, path) {
        document.cookie = cname + "=" + cvalue + ";expires=" + new Date(expire) + ";path=" + path;
    }
}
