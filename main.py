import requests
import random
import execjs
import urllib.parse
def creat_userLog(preX, preY, time):
    timestamp = random.randint(50,200) + time
    x = preX + random.randint(0,50)
    y = preY + random.randint(0,50)
    return {
        "type": "mousemove",
        "x": x,
        "y": y,
        "preX": preX,
        "preY": preY,
        "changeDistance": 0,
        "timestamp": timestamp
    }

def creat_user():
    v = {
        "userLog": [],
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "webglStr": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
        "webglVendorAndRenderer": "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x00009A40) Direct3D11 vs_5_0 ps_5_0, D3D11)Google Inc. (Intel)"
    }
    mouseEvent = {
        "x": 0,
        "y": 0,
        "timestamp": 0,
    }
    for i in range(random.randint(2,8)):
        mouseEvent = creat_userLog(mouseEvent['x'], mouseEvent['y'], mouseEvent['timestamp'])
        v['userLog'].append(mouseEvent)
    return JScode.call('get_params', v)
    

def requests_nav():
    cookies = {
    }

    headers = {
        'authority': 'api.bilibili.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7',
        'cache-control': 'no-cache',
        'origin': 'https://space.bilibili.com',
        'pragma': 'no-cache',
        'referer': 'https://space.bilibili.com/497603538/video',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }

    res = requests.get('https://api.bilibili.com/x/web-interface/nav', cookies=cookies, headers=headers).json()

    wbi = res['data']['wbi_img']
    wbi_img_urls = wbi['img_url'] + '-' + wbi['sub_url']
    data = 'localStorage = {"wbi_img_urls":"' + wbi_img_urls + '"}'
    return data



def requests_video(uid, pn):
    cookies = {
    }

    headers = {
        'authority': 'api.bilibili.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'origin': 'https://space.bilibili.com',
        'pragma': 'no-cache',
        'referer': f'https://space.bilibili.com/{uid}/video?tid=0&pn={pn}&keyword=&order=pubdate',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
    }

    temp = creat_user()
    t = {
        "mid": uid,
        "ps": "30", 
        "tid": "0", 
        "pn": pn, 
        "keyword": "",
        "order": "pubdate", 
        "platform": "web", 
        "web_location": "1550101",
        "order_avoided": 'true', 
        "dm_img_list": temp["dm_img_list"], 
        "dm_img_str": temp["dm_img_str"], 
        "dm_cover_img_str": temp["dm_cover_img_str"], 
    }
    e = {
        "wbiImgKey": "4a1d4479a1ea4146bc7552eea71c28e9",
        "wbiSubKey": "fa5812e23a204d10b332dc24d992432d"
    }
    w = JScode.call('get_w_rid', t, e)
    t.update({
        "w_rid": w['w_rid'], 
        "wts": w['wts']
    })
    # urlparams = '&'.join([f'{key}={urllib.parse.quote(t[key])}' for key in t])
    res = requests.get(
        'https://api.bilibili.com/x/space/wbi/arc/search',
        cookies=cookies,
        headers=headers,
        params=t
    )
    return res.json()





if __name__ == '__main__':
    with open('./params.js', 'r', encoding='utf-8') as f:
        JScode = f.read()
        JScode = requests_nav() + '\n' + JScode
        JScode = execjs.compile(JScode)
    uid = '353230307'
    for pn in range(1,23):
        res = requests_video(uid=uid, pn=pn)
        print(res)




