function animate(n) { requestAnimationFrame(animate); TWEEN.update(n); }; function generateRandomString(n) { let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", e = r.length; for (let o = 0; o < n; o++)t += r.charAt(Math.floor(Math.random() * e)); return t }; function log(e) { let t = new Date().toLocaleTimeString().slice(0, -3); templog.logs += firstlog ? `[${t}] ${e}` : `\n[${t}] ${e}`, firstlog = !1 } function waitForFocus() { return new Promise(e => { let t = () => { focused ? e() : setTimeout(t, 10) }; t() }) } function addHours(e, t = new Date) { return t.setTime(t.getTime() + 36e5 * e), t } function isValidHttpUrl(e) { let t; try { t = new URL(e) } catch (n) { return !1 } return "http:" === t.protocol || "https:" === t.protocol || "blob:" === t.protocol || "base64:" === t.protocol } function sleep(e) { return new Promise(t => setTimeout(t, e)) } async function waitFor(e, t = 50) { for (; !window.hasOwnProperty(e);)await new Promise(e => setTimeout(e, t)) } function waitForElm(e) { return new Promise(t => { if (document.querySelector(e)) return t(document.querySelector(e)); let n = new MutationObserver(o => { document.querySelector(e) && (t(document.querySelector(e)), n.disconnect()) }); n.observe(document.body, { childList: !0, subtree: !0 }) }) } function fade(e) { var t = 1, n = setInterval(function () { t <= .1 && (clearInterval(n), e.style.display = "none"), e.style.opacity = t, e.style.filter = "alpha(opacity=" + 100 * t + ")", t -= .25 * t }, 10) } function unfade(e) { var t = .1; e.style.display = "block"; var n = setInterval(function () { t >= 1 && clearInterval(n), e.style.opacity = t, e.style.filter = "alpha(opacity=" + 100 * t + ")", t += .15 * t }, 10) } function dragElement(e) { var t = 0, n = 0, o = 0, l = 0; function r(e) { (e = e || window.event).preventDefault(), t = o - e.clientX, n = l - e.clientY, o = e.clientX, l = e.clientY, base.style.top = base.offsetTop - n + "px", base.style.left = base.offsetLeft - t + "px" } function i() { document.onmouseup = null, document.onmousemove = null } e.onmousedown = function e(t) { (t = t || window.event).preventDefault(), o = t.clientX, l = t.clientY, document.onmouseup = i, document.onmousemove = r } };
var JPTestManager = "this is running from a script manager!";
console.log("idk bruv");
