let Arkose;

function setupEnforcement(enforcement) {
    console.log("setting enforcement");
    Arkose = enforcement;
}

function loadArkoseChallenge() {
    loadChallenge(callBack);
}

function callBack(token) {
    console.log('token from callback : ' + token);
}

function loadChallenge(callBack) {
    Arkose.setConfig({
        onCompleted: function(t) {
            console.log("Received token successfully : " + t.token);
            callBack(t.token);

        },
        onReady: function() {
            console.log('Loding the challenge');
            Arkose.run();
        }
    });
}
