/* ============================================================
   芒果TV《后会友期》角色测试 H5
   ============================================================ */

/* ===== 嘉宾角色数据 ===== */
const CHARACTERS = {
    tianyu: {
        name: '马天宇',
        emoji: '🌿',
        color: '#88c9a0',
        desc: '温柔佛系，边界感极强。你像马天宇一样，体面通透，朋友圈干净，重视人际交往的底线。情绪差了找AI聊天，翻遍通讯录找不到一个密友——不是没朋友，是真心难交。但真朋友，你会用生命护着。',
        quote: '"朋友之间不该因为一次拒绝就被否定。"',
        traits: { 温柔: 95, 边界感: 100, 通透: 90, 脆弱: 50, 主动: 25, 底线: 100 }
    },
    meng: {
        name: '张萌',
        emoji: '💪',
        color: '#f08878',
        desc: '敢做敢当，主动发起和解。你像张萌一样，表面大大咧咧，心思却很细。敢牵线马天宇和旧友重逢，也敢对着镜头说"也许我不该叫你来"。你不是不怕尴尬，是觉得有些结，总得有人先伸手。',
        quote: '"也许我不应该叫他来这里。"',
        traits: { 勇气: 95, 主动: 95, 责任感: 90, 细腻: 80, 直率: 85, 自责: 70 }
    },
    lina: {
        name: '厉娜',
        emoji: '🌙',
        color: '#b090d0',
        desc: '沉默寡言的深情派。你像厉娜一样，十几年的友情心结，一句也不说，但许飞递来的水，你会默默接住。你不是高冷，是不知道怎么开口。有些人走散了，你也不追，但心里永远留着一个位置。',
        quote: '（沉默，但所有的情感都在酒里了）',
        traits: { 深情: 90, 内敛: 95, 重情义: 95, 表达: 30, 沉默: 95, 倔强: 75 }
    },
    fei: {
        name: '许飞',
        emoji: '🎸',
        color: '#6a85b8',
        desc: '外冷内热的守护者。你像许飞一样，和厉娜有过"背刺"心结，但见面第一杯水，还是先递到她手里。你嘴上不说软话，甚至有些倔强，但真正在乎的人，你一个都不会放弃。刀子嘴，豆腐心说的就是你。',
        quote: '"这种情感是我们外人永远体会不到的。"',
        traits: { 护短: 95, 倔强: 85, 深情: 90, 嘴硬: 80, 义气: 95, 表达: 65 }
    },
    jier: {
        name: '文吉儿',
        emoji: '📖',
        color: '#d4a855',
        desc: '你是会制造冲突的灵魂作家。像文吉儿一样，擅长把和解局变成对峙局，一开口就是转账记录和"三万事变"。你不是故意挑事，是真心相信有些话说开了才能往前走。但有时，你说太多了。',
        quote: '"青春疼痛不只是早恋背叛，还有转账记录。"',
        traits: { 表达: 95, 自我: 80, 抓马: 90, 直接: 85, 敏感: 75, 拉扯: 90 }
    },
    zixuan: {
        name: '王子璇',
        emoji: '🌸',
        color: '#f8a8c8',
        desc: '清醒冷静的边界女王。你像王子璇一样，不勉强维持体面的虚假友情，敢于划清边界，坦然说出自己的感受。曾经交付真心，被消耗过后慢慢收回期待。你活得像观众的共情出口——冷静，有力量，不讨好谁。',
        quote: '"我连心疼你都有时差。"',
        traits: { 清醒: 100, 边界感: 98, 坦然: 90, 理性: 85, 共情: 75, 表达: 80 }
    },
    qingzhi: {
        name: '青稚',
        emoji: '🎮',
        color: '#ff9955',
        desc: '简单直接的小朋友。你像《和平精英》职业选手青稚一样，想啥说啥，不绕弯，像长不大的小孩。别人勾心斗角的时候，你只在乎今天能不能一起打排位。复杂的事情会让你头疼，但纯粹的友情，你是最忠诚的那一个。',
        quote: '"游戏开黑比什么都实在。"',
        traits: { 直接: 95, 简单: 100, 单纯: 90, 直率: 95, 边界感: 40, 忠诚: 95 }
    },
    xiaochun: {
        name: '白小纯',
        emoji: '🐼',
        color: '#5ebf95',
        desc: '阳光没心没肺的小可爱。你像白小纯一样，和青稚凑在一起就是两个小朋友。没心机，没心眼，想笑就笑，想玩就玩。别人的友情有裂缝，你觉得"这有啥呀"。你可能看起来没心没肺，但你的简单，就是很多人羡慕的样子。',
        quote: '"来，打一局，不开心都没了！"',
        traits: { 阳光: 100, 简单: 95, 乐观: 95, 直率: 90, 细腻: 35, 朋友缘: 95 }
    }
};

/* ===== 测试题目 ===== */
const QUESTIONS = [
    {
        q: '旧友突然发消息说"出来聚聚吧"，你的第一反应是？',
        options: [
            { text: '"好啊，定个地方！" 立刻答应，但其实有点紧张', tag: 'tianyu' },
            { text: '"必须的！" 秒回，并且主动订餐厅', tag: 'meng' },
            { text: '犹豫很久，不知道说什么好', tag: 'lina' },
            { text: '"行啊" 嘴上淡淡，但心里想了很多', tag: 'fei' },
            { text: '心里有很多话想说，但又怕说太直', tag: 'jier' },
            { text: '先问清楚是哪些人，再考虑要不要去', tag: 'zixuan' },
            { text: '"去哪玩？！有游戏打吗？"', tag: 'qingzhi' },
            { text: '"走走走！我顺路接你！"', tag: 'xiaochun' }
        ]
    },
    {
        q: '朋友之间十年没联系，你觉得最可能的原因是？',
        options: [
            { text: '时间和距离冲淡了，挺正常的', tag: 'tianyu' },
            { text: '总得有个主动的人，不然就散了', tag: 'meng' },
            { text: '有些结解不开，不如不说', tag: 'lina' },
            { text: '心里过不去那个坎，但其实一直牵挂', tag: 'fei' },
            { text: '可能是谁说了什么不该说的话', tag: 'jier' },
            { text: '期待不一样了，不是一类人了', tag: 'zixuan' },
            { text: '啊？朋友还要刻意联系的吗？', tag: 'qingzhi' },
            { text: '哈哈不会呀，我没这个烦恼', tag: 'xiaochun' }
        ]
    },
    {
        q: '你最理想的友情状态是？',
        options: [
            { text: '懂彼此的边界，不常联系但一直都在', tag: 'tianyu' },
            { text: '有事一起扛，不藏着掖着', tag: 'meng' },
            { text: '不用说话，坐在一起就很舒服', tag: 'lina' },
            { text: '吵吵闹闹，但关键时刻绝不含糊', tag: 'fei' },
            { text: '什么都能聊，包括那些"见不得人"的事', tag: 'jier' },
            { text: '互相尊重，各自精彩，偶尔碰面', tag: 'zixuan' },
            { text: '一起开黑的兄弟，啥都不用说', tag: 'qingzhi' },
            { text: '开开心心，没烦恼，一直玩一直乐', tag: 'xiaochun' }
        ]
    },
    {
        q: '和朋友闹僵了，你会？',
        options: [
            { text: '自己消化，翻遍通讯录找不到人倾诉', tag: 'tianyu' },
            { text: '主动找对方聊，哪怕很尴尬', tag: 'meng' },
            { text: '就放着吧，该好的时候自然会好', tag: 'lina' },
            { text: '等对方先道歉，但其实一直想开口', tag: 'fei' },
            { text: '把话挑明，哪怕场面很僵', tag: 'jier' },
            { text: '好好聊一次，聊不拢就算了', tag: 'zixuan' },
            { text: '找个台阶下，然后一起打把游戏', tag: 'qingzhi' },
            { text: '"诶，走，吃饭去！" 假装啥也没发生', tag: 'xiaochun' }
        ]
    },
    {
        q: '看到朋友emo了，你的反应是？',
        options: [
            { text: '陪他安静坐着，什么都不说', tag: 'tianyu' },
            { text: '"走！出去玩！" 硬拉着他散心', tag: 'meng' },
            { text: '默默发一首歌给他', tag: 'lina' },
            { text: '"别想太多，走喝酒去"', tag: 'fei' },
            { text: '追问到底怎么了，一定要听他说出来', tag: 'jier' },
            { text: '先让他自己待会儿，等他愿意说再听', tag: 'zixuan' },
            { text: '"来！打把排位！"', tag: 'qingzhi' },
            { text: '"哈哈看这个视频！笑死我了！"', tag: 'xiaochun' }
        ]
    },
    {
        q: '朋友借了三万块没还，你会？',
        options: [
            { text: '算了，三万看透一个人', tag: 'tianyu' },
            { text: '直接问，欠钱还钱天经地义', tag: 'meng' },
            { text: '张不开口，但心里记下了', tag: 'lina' },
            { text: '侧面提醒一下，等他自己说', tag: 'fei' },
            { text: '把转账记录甩出来，摊开聊', tag: 'jier' },
            { text: '"你那三万什么时候方便？" 冷静直接', tag: 'zixuan' },
            { text: '啊？他没还我？我忘了...', tag: 'qingzhi' },
            { text: '没事没事！朋友间谈钱太伤感情啦', tag: 'xiaochun' }
        ]
    },
    {
        q: '如果有一个"友情综艺"邀请你，你会怎么选旅伴？',
        options: [
            { text: '选一个认识很久、没什么争议的老朋友', tag: 'tianyu' },
            { text: '就选那个最有话题的，敢上节目就敢说', tag: 'meng' },
            { text: '选一个一直没说开的人，想聊聊', tag: 'lina' },
            { text: '选一个拌嘴但关系铁的损友', tag: 'fei' },
            { text: '选一个有"故事"的，越有戏越好', tag: 'jier' },
            { text: '选一个相处舒服、不会有尴尬的', tag: 'zixuan' },
            { text: '就跟青稚/白小纯一起！打游戏！', tag: 'qingzhi' },
            { text: '谁叫我我都去！去哪都行！', tag: 'xiaochun' }
        ]
    },
    {
        q: '高原旅行第一顿，大家都饿疯了，你会？',
        options: [
            { text: '默默给大家倒水，谁杯子空了就添', tag: 'tianyu' },
            { text: '"快吃快吃！不够再点！" 张罗大家', tag: 'meng' },
            { text: '安静吃饭，偶尔抬头看看大家', tag: 'lina' },
            { text: '把菜转到厉娜那边，不管别人', tag: 'fei' },
            { text: '一边吃一边开启"深度话题"', tag: 'jier' },
            { text: '好好吃饭，不想说话', tag: 'zixuan' },
            { text: '"有肉吗？有肉吗？" 疯狂找肉', tag: 'qingzhi' },
            { text: '啥都吃啥都香，吃着吃着就笑了', tag: 'xiaochun' }
        ]
    },
    {
        q: '你觉得自己在朋友圈里的角色是？',
        options: [
            { text: '倾听者，但没人知道我也需要倾诉', tag: 'tianyu' },
            { text: '组织者，大家有事就找我', tag: 'meng' },
            { text: '默默存在的那个，存在感不强', tag: 'lina' },
            { text: '大家的"老妈子"，爱操心', tag: 'fei' },
            { text: '话题制造者，气氛担当', tag: 'jier' },
            { text: '边缘观察者，不太想掺和', tag: 'zixuan' },
            { text: '快乐源泉！大家的开心果！', tag: 'qingzhi' },
            { text: '吉祥物！去哪都是气氛最活跃的', tag: 'xiaochun' }
        ]
    },
    {
        q: '最后一题，你的友情信条是？',
        options: [
            { text: '朋友不在多，在于真', tag: 'tianyu' },
            { text: '有些结，总得有人先伸手', tag: 'meng' },
            { text: '真正的朋友，不需要太多话', tag: 'lina' },
            { text: '嘴上不饶人，但心里都是你', tag: 'fei' },
            { text: '把话说开，才能往前走', tag: 'jier' },
            { text: '尊重边界，友情才能长久', tag: 'zixuan' },
            { text: '一起玩，一起冲，就够了', tag: 'qingzhi' },
            { text: '开心就好，友情哪有那么复杂', tag: 'xiaochun' }
        ]
    }
];

/* ===== 应用状态 ===== */
const app = {
    currentPage: 'start',
    currentQuestion: 0,
    answers: new Array(QUESTIONS.length).fill(null),
    scores: {},
    result: null
};

Object.keys(CHARACTERS).forEach(k => app.scores[k] = 0);

/* ===== DOM ===== */
const $ = (sel) => document.querySelector(sel);
const pages = {
    start: $('#pageStart'),
    quiz: $('#pageQuiz'),
    loading: $('#pageLoading'),
    result: $('#pageResult')
};

/* ===== 云朵粒子背景 ===== */
function initParticles() {
    const canvas = $('#particles');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const count = 40;
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            o: Math.random() * 0.3 + 0.1,
            hue: Math.random() * 60 + 180
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 60%, 75%, ${p.o})`;
            ctx.fill();
        });
        // 连线
        particles.forEach((a, i) => {
            particles.slice(i + 1).forEach(b => {
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `hsla(200, 60%, 80%, ${(1 - dist / 140) * 0.06})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ===== 页面切换 ===== */
function showPage(name) {
    Object.keys(pages).forEach(k => pages[k].classList.remove('active'));
    pages[name].classList.add('active');
    app.currentPage = name;
}

/* ===== 渲染题目 ===== */
function renderQuestion() {
    const idx = app.currentQuestion;
    const q = QUESTIONS[idx];

    $('#currentNum').textContent = idx + 1;
    $('#progressFill').style.width = ((idx + 1) / QUESTIONS.length * 100) + '%';
    $('#questionTitle').textContent = q.q;
    $('#questionTitle').style.animation = 'none';
    $('#questionTitle').offsetHeight;
    $('#questionTitle').style.animation = '';

    const list = $('#optionsList');
    list.innerHTML = '';
    list.scrollTop = 0;
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-item' + (app.answers[idx] === i ? ' selected' : '');
        btn.textContent = opt.text;
        btn.dataset.num = String.fromCharCode(65 + i);
        btn.addEventListener('click', () => selectOption(i));
        list.appendChild(btn);
    });

    $('#btnPrev').disabled = idx === 0;
    $('#btnNext').textContent = idx === QUESTIONS.length - 1 ? '查看结果' : '下一题';
    $('#btnNext').disabled = app.answers[idx] === null;
}

/* ===== 选择选项 ===== */
function selectOption(i) {
    app.answers[app.currentQuestion] = i;
    const opts = document.querySelectorAll('.option-item');
    opts.forEach((o, idx) => o.classList.toggle('selected', idx === i));
    $('#btnNext').disabled = false;
}

/* ===== 下一题 ===== */
function nextQuestion() {
    if (app.answers[app.currentQuestion] === null) return;
    if (app.currentQuestion === QUESTIONS.length - 1) {
        calculateResult();
        showPage('loading');
        setTimeout(showResult, 2500);
        return;
    }
    app.currentQuestion++;
    renderQuestion();
}

/* ===== 上一题 ===== */
function prevQuestion() {
    if (app.currentQuestion === 0) return;
    app.currentQuestion--;
    renderQuestion();
}

/* ===== 计算结果 ===== */
function calculateResult() {
    app.scores = {};
    Object.keys(CHARACTERS).forEach(k => app.scores[k] = 0);
    app.answers.forEach((ans, idx) => {
        if (ans !== null) {
            const tag = QUESTIONS[idx].options[ans].tag;
            app.scores[tag]++;
        }
    });
    let maxTag = Object.keys(CHARACTERS)[0], maxScore = -1;
    Object.keys(app.scores).forEach(k => {
        if (app.scores[k] > maxScore) { maxScore = app.scores[k]; maxTag = k; }
    });
    app.result = maxTag;
}

/* ===== 显示结果 ===== */
function showResult() {
    const c = CHARACTERS[app.result];
    $('#resultName').textContent = c.name;
    $('#resultAvatar').textContent = c.emoji;
    $('#resultAvatar').style.background = `linear-gradient(135deg, ${c.color}33, ${c.color}66)`;
    $('#resultDesc').textContent = c.desc;
    $('#resultQuote').textContent = c.quote;

    showPage('result');
    setTimeout(() => drawRadar(c.traits), 100);
}

/* ===== 雷达图绘制 ===== */
function drawRadar(traits) {
    const canvas = $('#radarChart');
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const radius = 90;
    const labels = Object.keys(traits);
    const values = Object.values(traits);
    const sides = labels.length;

    ctx.clearRect(0, 0, w, h);

    // 背景网格
    for (let level = 1; level <= 5; level++) {
        const r = (radius / 5) * level;
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // 轴线
    labels.forEach((_, i) => {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();
    });

    // 数据区域
    ctx.beginPath();
    values.forEach((v, i) => {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        const r = (v / 100) * radius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    const c = CHARACTERS[app.result];
    ctx.fillStyle = c.color + '44';
    ctx.fill();
    ctx.strokeStyle = c.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // 数据点
    values.forEach((v, i) => {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        const r = (v / 100) * radius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
    });

    // 标签
    ctx.font = '12px -apple-system, "PingFang SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    labels.forEach((label, i) => {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        const lx = cx + (radius + 22) * Math.cos(angle);
        const ly = cy + (radius + 22) * Math.sin(angle);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(label, lx, ly);
    });
}

/* ===== 邀请分享 ===== */
function openInviteModal() {
    const c = CHARACTERS[app.result];
    const preview = $('#posterPreview');
    preview.innerHTML = `
        <div style="text-align:center;padding:30px 20px;">
            <div style="font-size:80px;margin-bottom:15px;">${c.emoji}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:3px;margin-bottom:8px;">你像《后会友期》里的</div>
            <div style="font-size:36px;font-weight:700;color:${c.color};letter-spacing:4px;margin-bottom:20px;">${c.name}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.6);font-style:italic;line-height:1.6;padding:0 10px;">${c.quote}</div>
            <div style="margin-top:25px;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2px;">芒果TV 后会友期 · 友情测试</div>
        </div>
    `;
    $('#inviteModal').classList.add('show');
}

function closeInviteModal() {
    $('#inviteModal').classList.remove('show');
}

/* ===== Toast ===== */
let toastTimer;
function showToast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}

/* ===== 事件绑定 ===== */
function bindEvents() {
    $('#btnStart').addEventListener('click', () => {
        showPage('quiz');
        renderQuestion();
    });

    $('#btnPrev').addEventListener('click', prevQuestion);
    $('#btnNext').addEventListener('click', nextQuestion);

    $('#btnAgain').addEventListener('click', () => {
        app.currentQuestion = 0;
        app.answers = new Array(QUESTIONS.length).fill(null);
        showPage('quiz');
        renderQuestion();
    });

    $('#btnInvite').addEventListener('click', openInviteModal);
    $('#btnCloseModal').addEventListener('click', closeInviteModal);
    $('#inviteModal').querySelector('.modal-mask').addEventListener('click', closeInviteModal);

    $('#btnSave').addEventListener('click', () => {
        showToast('长按图片即可保存');
    });
}

/* ===== 初始化 ===== */
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    bindEvents();
});
