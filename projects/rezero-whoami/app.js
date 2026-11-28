/* ============================================================
   《Re:从零开始的异世界生活》角色测试 H5
   ============================================================ */

/* ===== 嘉宾角色数据 ===== */
const CHARACTERS = {
    subaru: {
        name: '菜月昴',
        emoji: '🧣',
        color: '#e8843c',
        desc: '普通人，却从不认输。你像菜月昴一样，嘴上爱吐槽、爱逞强，遇到再糟的局面也会咬牙重来。你不是天生勇敢，只是不想让在乎的人失望。哪怕失败一百次，你也会从零开始，再来一次。',
        quote: '"从零开始，重新来过。"',
        traits: { 热血: 95, 执着: 95, 逞强: 90, 重情: 90, 吐槽: 85, 勇气: 90 }
    },
    emilia: {
        name: '爱蜜莉雅',
        emoji: '🌸',
        color: '#b48be0',
        desc: '善良到有点固执。你像爱蜜莉雅一样，温柔、纯粹，愿意相信别人最好的一面。你不擅长算计，也不太懂人情世故，但你的真诚会让身边的人放下戒备。你希望所有人都不被辜负，哪怕自己要为此多走一段路。',
        quote: '"我想帮上大家的忙。"',
        traits: { 善良: 100, 纯粹: 95, 温柔: 95, 天然: 85, 认真: 90, 信任: 85 }
    },
    rem: {
        name: '雷姆',
        emoji: '💙',
        color: '#5a9be8',
        desc: '把所有温柔都留给在乎的人。你像雷姆一样，曾经自卑，却愿意为重要的人拼尽全力。你话不多，但会默默把一切打理好；你嘴上说"没关系"，心里其实很在意。你的忠诚，是把对方放在自己前面。',
        quote: '"从零开始，从这里开始。"',
        traits: { 忠诚: 100, 温柔: 95, 牺牲: 90, 勇敢: 90, 自卑: 70, 可靠: 95 }
    },
    ram: {
        name: '拉姆',
        emoji: '🌹',
        color: '#e87ba4',
        desc: '毒舌是保护色，骄傲是盔甲。你像拉姆一样，嘴上不饶人，心里却比谁都清醒。你看得透很多事，只是懒得解释；你护短，尤其护自己在乎的人。别人以为你刻薄，其实你只是不想把时间浪费在客套上。',
        quote: '"拉姆可是很忙的。"',
        traits: { 毒舌: 100, 骄傲: 95, 清醒: 95, 护短: 95, 自信: 90, 傲娇: 85 }
    },
    beatrice: {
        name: '碧翠丝',
        emoji: '📚',
        color: '#d0a85c',
        desc: '嘴上嫌弃，心里很软。你像碧翠丝一样，把自己关在书库里，装作什么都不在乎，其实最怕孤单。你希望有人需要你、依赖你，却怎么也不肯先说出口。你的"哼"和"笨蛋"，翻译过来其实是"别走"。',
        quote: '"贝蒂才没有在等你呢。"',
        traits: { 傲娇: 100, 口是心非: 95, 孤独: 80, 可爱: 90, 博学: 95, 心软: 90 }
    },
    felt: {
        name: '菲鲁特',
        emoji: '⚡',
        color: '#f0b040',
        desc: '野性、直率、不服输。你像菲鲁特一样，从底层一路闯出来，讨厌被人安排，也不怕得罪谁。你说话直、做事快，认定的事就往前冲。别人觉得你太冲，其实你只是比谁都清楚，机会要自己抢。',
        quote: '"想要的，就自己去抢。"',
        traits: { 直率: 100, 自由: 95, 要强: 95, 行动力: 100, 野性: 90, 义气: 80 }
    }
};

/* ===== 测试题目 ===== */
const QUESTIONS = [
    {
        q: '一觉醒来，你发现自己站在完全陌生的街道上，第一反应是？',
        options: [
            { text: '先搞清楚状况，再想办法活下去', tag: 'subaru' },
            { text: '有点慌，但先对周围的人露出善意的笑', tag: 'emilia' },
            { text: '冷静观察四周，寻找最可靠的线索', tag: 'rem' },
            { text: '皱眉吐槽：这地方也太离谱了吧', tag: 'ram' },
            { text: '先找个安静的角落，把自己藏起来', tag: 'beatrice' },
            { text: '兴奋：正好，看看能不能捞点好处', tag: 'felt' }
        ]
    },
    {
        q: '有人当众误解你，你会？',
        options: [
            { text: '直接怼回去，不能白白背锅', tag: 'subaru' },
            { text: '小声解释，希望对方别再误会', tag: 'emilia' },
            { text: '不辩驳，用行动证明自己', tag: 'rem' },
            { text: '冷笑一声：你开心就好', tag: 'ram' },
            { text: '嘴上说"随便你"，心里气很久', tag: 'beatrice' },
            { text: '当场把话说清楚，谁怕谁', tag: 'felt' }
        ]
    },
    {
        q: '朋友遇到危险，你的第一反应是？',
        options: [
            { text: '冲上去，先救人再说', tag: 'subaru' },
            { text: '想办法求助，尽量不让任何人受伤', tag: 'emilia' },
            { text: '挡在对方面前，哪怕自己会受伤', tag: 'rem' },
            { text: '快速判断局势，用最有效的方式解决', tag: 'ram' },
            { text: '嘴上抱怨，身体却已经先动了', tag: 'beatrice' },
            { text: '拉上人先跑，脱身之后再算账', tag: 'felt' }
        ]
    },
    {
        q: '你更害怕哪种情况？',
        options: [
            { text: '什么都做不了，只能看着事情变糟', tag: 'subaru' },
            { text: '被重要的人讨厌', tag: 'emilia' },
            { text: '成为别人的负担', tag: 'rem' },
            { text: '被人看轻、失去掌控', tag: 'ram' },
            { text: '一个人待在空荡荡的房间里', tag: 'beatrice' },
            { text: '被别人安排，失去自由', tag: 'felt' }
        ]
    },
    {
        q: '你的日常状态更像？',
        options: [
            { text: '表面摆烂，关键时刻拼尽全力', tag: 'subaru' },
            { text: '认真生活，对每个人都保持善意', tag: 'emilia' },
            { text: '把该做的事做到最好，很少喊累', tag: 'rem' },
            { text: '毒舌吐槽，但其实什么都知道', tag: 'ram' },
            { text: '窝在房间看书，不想被打扰', tag: 'beatrice' },
            { text: '到处乱跑，一闲下来就难受', tag: 'felt' }
        ]
    },
    {
        q: '面对"命运"这种东西，你的态度是？',
        options: [
            { text: '不服，就算重复一百次也要改变它', tag: 'subaru' },
            { text: '顺其自然，但想护住身边的人', tag: 'emilia' },
            { text: '拼尽全力，至少不留遗憾', tag: 'rem' },
            { text: '命运？我更相信自己的判断', tag: 'ram' },
            { text: '想反抗，却又害怕只剩一个人', tag: 'beatrice' },
            { text: '命运算什么，我偏要走另一条路', tag: 'felt' }
        ]
    },
    {
        q: '别人夸你时，你通常？',
        options: [
            { text: '嘴上说"没有没有"，心里偷偷高兴', tag: 'subaru' },
            { text: '认真道谢，然后有点不好意思', tag: 'emilia' },
            { text: '低头说"我哪有那么好"', tag: 'rem' },
            { text: '"嗯，这次算你有眼光"', tag: 'ram' },
            { text: '"哼，这还用你说"', tag: 'beatrice' },
            { text: '"那当然！" 完全不客气', tag: 'felt' }
        ]
    },
    {
        q: '你和亲近的人相处时更像？',
        options: [
            { text: '互相吐槽拆台，但谁有事都第一个到', tag: 'subaru' },
            { text: '温和体贴，不太会吵架', tag: 'emilia' },
            { text: '默默照顾对方，把细节都做好', tag: 'rem' },
            { text: '嘴上刻薄，行动上护到底', tag: 'ram' },
            { text: '口是心非，越亲近越傲娇', tag: 'beatrice' },
            { text: '直来直去，有什么说什么', tag: 'felt' }
        ]
    },
    {
        q: '如果只能带一样东西去异世界，你会选？',
        options: [
            { text: '一部还能开机的手机', tag: 'subaru' },
            { text: '家人和朋友的照片', tag: 'emilia' },
            { text: '一件真正能派上用场的工具', tag: 'rem' },
            { text: '一面小镜子', tag: 'ram' },
            { text: '一本最爱的书', tag: 'beatrice' },
            { text: '一把顺手的小刀', tag: 'felt' }
        ]
    },
    {
        q: '最后一题，你的人生信条是？',
        options: [
            { text: '失败了就重来，反正我不认输', tag: 'subaru' },
            { text: '善待别人，也别辜负自己', tag: 'emilia' },
            { text: '为在乎的人，拼尽全力', tag: 'rem' },
            { text: '保持骄傲，不为谁低头', tag: 'ram' },
            { text: '就算一个人，也要好好活下去', tag: 'beatrice' },
            { text: '想要的东西，就自己去争取', tag: 'felt' }
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

/* ===== 星尘粒子背景 ===== */
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
            hue: Math.random() * 80 + 230
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
            <div style="font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:3px;margin-bottom:8px;">你像《Re:从零开始的异世界生活》里的</div>
            <div style="font-size:36px;font-weight:700;color:${c.color};letter-spacing:4px;margin-bottom:20px;">${c.name}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.6);font-style:italic;line-height:1.6;padding:0 10px;">${c.quote}</div>
            <div style="margin-top:25px;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2px;">Re:从零开始的异世界生活 · 角色测试</div>
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
