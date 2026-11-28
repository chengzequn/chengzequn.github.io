/* ============================================================
   电视剧《谷雨》角色测试 H5
   ============================================================ */

/* ===== 嘉宾角色数据 ===== */
const CHARACTERS = {
    ouyang: {
        name: '欧阳煦',
        emoji: '🔍',
        color: '#2e5b78',
        desc: '国税总局稽查处的处长。你像欧阳煦一样，冷静、敏锐，认准的疑点就一定要查到底。你相信规则，也看得懂人心，别人觉得你太较真，其实你只是不愿意让真相被糊弄过去。',
        quote: '疑点不会自己消失，除非有人去查。',
        traits: { 敏锐: 95, 原则: 100, 冷静: 95, 洞察: 90, 坚持: 90, 克制: 85 }
    },
    yan: {
        name: '严平安',
        emoji: '👔',
        color: '#c08a3e',
        desc: '刑警出身的服装企业老板。你像严平安一样，直觉准、嗅觉灵，遇到事情先想怎么让自己活下来。你身上有股江湖气，讲情义也懂进退，看似在自保，关键时刻却敢把话挑明、实名举报。',
        quote: '先活下来，才有资格谈真相。',
        traits: { 直觉: 95, 谨慎: 90, 义气: 85, 求生欲: 95, 江湖气: 85, 果断: 90 }
    },
    zhou: {
        name: '周海洋',
        emoji: '🖨️',
        color: '#6b4a5e',
        desc: '精通印刷的技工，善于隐忍和伪装。你像周海洋一样，脑子快、手上有真本事，心里却装着一本算得极清的账。你不轻易表露情绪，被利益和感情逼到墙角时，会做出让所有人都意外的选择。',
        quote: '忍到最后的人，才有资格翻盘。',
        traits: { 隐忍: 100, 聪慧: 95, 执念: 95, 伪装: 90, 野心: 85, 偏爱: 80 }
    },
    tan: {
        name: '谭宝仪',
        emoji: '💼',
        color: '#b0557a',
        desc: '周海洋最信任的财务负责人。你像谭宝仪一样，心思缜密、做事滴水不漏，账目和人情的分寸都算得明白。你看上去冷静疏离，其实认定一个人就会陪到底，哪怕始终没有一个名分。',
        quote: '账要算清，人也要认准。',
        traits: { 缜密: 100, 精算: 95, 痴情: 90, 果断: 95, 隐忍: 85, 危险: 80 }
    },
    li: {
        name: '李阿红',
        emoji: '🌹',
        color: '#a04a3a',
        desc: '林如意的母亲。你像李阿红一样，精明强干、护短到底。你可以在外面周旋算计，却舍不得让在乎的人受一点委屈。你不是没有害怕过，只是很多时候没有退路，也不能退。',
        quote: '我可以退，但我在乎的人不行。',
        traits: { 精明: 100, 护短: 95, 强势: 95, 脆弱: 70, 决断: 90, 手腕: 90 }
    },
    lin: {
        name: '林如意',
        emoji: '🧨',
        color: '#c0504d',
        desc: '李阿红的女儿，一头红发，叛逆又倔强。你像林如意一样，用带刺的话和任性的姿态保护自己，越是在乎越不肯好好说。你看得清大人的算计，也有私心和怯懦，但真正做决定时，你比谁都安静，也比谁都果断。',
        quote: '越是被安排，越想自己走一条路。',
        traits: { 叛逆: 100, 倔强: 95, 渴望被爱: 90, 敏感: 85, 灰度: 80, 勇敢: 85 }
    }
};

/* ===== 测试题目 ===== */
const QUESTIONS = [
    {
        q: '你被卷进一件说不清的麻烦事，第一反应是？',
        options: [
            { text: '先梳理线索，找出最关键的那一环', tag: 'ouyang' },
            { text: '先判断风险，想办法让自己全身而退', tag: 'yan' },
            { text: '不动声色，等别人先露出破绽', tag: 'zhou' },
            { text: '把账目和关系理清楚，再决定站哪边', tag: 'tan' },
            { text: '先护住身边的人，其他以后再说', tag: 'li' },
            { text: '嘴上说无所谓，其实已经开始较劲', tag: 'lin' }
        ]
    },
    {
        q: '别人当面质疑你，你会？',
        options: [
            { text: '拿出证据，一条一条说清楚', tag: 'ouyang' },
            { text: '先稳住场面，回头再想办法', tag: 'yan' },
            { text: '不解释，让对方自己猜不透', tag: 'zhou' },
            { text: '冷静反问，把主动权拿回来', tag: 'tan' },
            { text: '直接顶回去，气势不能输', tag: 'li' },
            { text: '当场怼回去，哪怕撕破脸', tag: 'lin' }
        ]
    },
    {
        q: '你最擅长的事是？',
        options: [
            { text: '从细节里看出哪里不对劲', tag: 'ouyang' },
            { text: '看人下菜，随机应变', tag: 'yan' },
            { text: '把真本事藏在不起眼的外表下', tag: 'zhou' },
            { text: '把复杂的事情算得明明白白', tag: 'tan' },
            { text: '在人情场里周旋，把事办成', tag: 'li' },
            { text: '一眼看穿谁在装、谁在演', tag: 'lin' }
        ]
    },
    {
        q: '你最难接受的是什么？',
        options: [
            { text: '真相被人为掩盖', tag: 'ouyang' },
            { text: '被人当成可以随便拿捏的软柿子', tag: 'yan' },
            { text: '自己的命运被别人的一句话改写', tag: 'zhou' },
            { text: '付出全部却始终得不到名分', tag: 'tan' },
            { text: '在乎的人被伤害', tag: 'li' },
            { text: '被安排、被定义、被当成小孩', tag: 'lin' }
        ]
    },
    {
        q: '朋友遇到麻烦来找你，你会？',
        options: [
            { text: '帮他分析利弊，找出最稳的办法', tag: 'ouyang' },
            { text: '先问清楚牵扯到谁，再决定帮不帮', tag: 'yan' },
            { text: '嘴上不答应，暗地里替他把路铺好', tag: 'zhou' },
            { text: '直接问要多少钱、要办什么事', tag: 'tan' },
            { text: '二话不说站出来，先护住人', tag: 'li' },
            { text: '陪他骂一顿，然后一起想办法', tag: 'lin' }
        ]
    },
    {
        q: '在一场博弈里，你更像？',
        options: [
            { text: '盯着规则找漏洞的人', tag: 'ouyang' },
            { text: '随时准备抽身的人', tag: 'yan' },
            { text: '藏在幕后布局的人', tag: 'zhou' },
            { text: '掌握账本和底牌的人', tag: 'tan' },
            { text: '把所有人情都算进去的人', tag: 'li' },
            { text: '不按牌理出牌的人', tag: 'lin' }
        ]
    },
    {
        q: '别人眼里，你最大的标签是？',
        options: [
            { text: '太较真', tag: 'ouyang' },
            { text: '太会躲', tag: 'yan' },
            { text: '看不透', tag: 'zhou' },
            { text: '太冷静', tag: 'tan' },
            { text: '太强势', tag: 'li' },
            { text: '太叛逆', tag: 'lin' }
        ]
    },
    {
        q: '如果只能保住一样东西，你选？',
        options: [
            { text: '真相', tag: 'ouyang' },
            { text: '自己的命', tag: 'yan' },
            { text: '翻盘的机会', tag: 'zhou' },
            { text: '那个人的心', tag: 'tan' },
            { text: '女儿的安稳', tag: 'li' },
            { text: '自由', tag: 'lin' }
        ]
    },
    {
        q: '你处理情绪的方式是？',
        options: [
            { text: '压下去，先把手上的事做完', tag: 'ouyang' },
            { text: '找点乐子，别让自己想太多', tag: 'yan' },
            { text: '一个人待着，谁也不说', tag: 'zhou' },
            { text: '把情绪折进工作里', tag: 'tan' },
            { text: '嘴上骂人，手上继续扛', tag: 'li' },
            { text: '听歌、发火，或者干脆消失一天', tag: 'lin' }
        ]
    },
    {
        q: '最后一题，你的人生信条是？',
        options: [
            { text: '真相值得有人去追', tag: 'ouyang' },
            { text: '先保住自己，再谈其他', tag: 'yan' },
            { text: '忍到最后，才有翻盘的那天', tag: 'zhou' },
            { text: '要算就算到最后一页', tag: 'tan' },
            { text: '我可以退，但要护的人不能受伤', tag: 'li' },
            { text: '我的人生，我自己说了算', tag: 'lin' }
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

/* ===== 雨夜粒子背景 ===== */
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
            hue: Math.random() * 50 + 195
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
        ctx.strokeStyle = 'rgba(90,80,130,0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // 轴线
    labels.forEach((_, i) => {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(90,80,130,0.12)';
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
        ctx.fillStyle = 'rgba(60,52,88,0.75)';
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
            <div style="font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:3px;margin-bottom:8px;">你像《谷雨》里的</div>
            <div style="font-size:36px;font-weight:700;color:${c.color};letter-spacing:4px;margin-bottom:20px;">${c.name}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.6);font-style:italic;line-height:1.6;padding:0 10px;">${c.quote}</div>
            <div style="margin-top:25px;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2px;">电视剧《谷雨》 · 角色测试</div>
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
