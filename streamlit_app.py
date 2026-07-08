<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KhmerCrop AI · Project Control</title>
    <link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=Kantumruy+Pro:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="kc-root">

        <!-- ============ TOP BAR ============ -->
        <header class="kc-topbar">
            <div class="kc-topbar-inner">
                <a class="kc-brand" href="#">
                    <span class="kc-brand-icon">🌾</span>
                    <span class="kc-brand-text">
                        <span class="kc-brand-title">KhmerCrop AI</span>
                        <span class="kc-brand-sub">Project Control</span>
                    </span>
                </a>
                <div class="kc-topbar-actions">
                    <div class="kc-user-picker">
                        <label for="kc-current-user">អ្នកប្រើ</label>
                        <select id="kc-current-user"></select>
                    </div>
                    <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-print" title="បោះពុម្ព">🖶</button>
                    <button class="kc-btn kc-btn-gold kc-btn-sm" id="kc-export">⬇ នាំចេញ</button>
                    <div class="kc-dropdown-wrap">
                        <button class="kc-dropdown-btn" id="kc-dropdown-toggle" aria-label="បញ្ជីការកំណត់">⚙️</button>
                        <div class="kc-dropdown-menu" id="kc-dropdown-menu">
                            <button class="kc-dropdown-item" id="kc-toggle-dark">
                                <span>🌙 របៀបងងឹត</span>
                                <span class="kc-toggle-track" id="kc-dark-track">
                                    <span class="kc-toggle-knob"></span>
                                </span>
                            </button>
                            <div class="kc-dropdown-divider"></div>
                            <button class="kc-dropdown-item" id="kc-export-json">💾 នាំចេញ JSON</button>
                            <button class="kc-dropdown-item" id="kc-import-json">📂 នាំចូល JSON</button>
                            <div class="kc-dropdown-divider"></div>
                            <button class="kc-dropdown-item danger" id="kc-reset-data">🗑️ កំណត់ឡើងវិញ</button>
                            <div class="kc-dropdown-divider"></div>
                            <button class="kc-dropdown-item" id="kc-shortcut-help-btn">⌨️ ផ្លូវកាត់</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- ============ HERO ============ -->
        <section class="kc-hero">
            <div class="kc-hero-inner">
                <div class="kc-eyebrow">ក្រុម AgriSense · AI Smart Farming Competition 2026</div>
                <h1 class="kc-title">KhmerCrop AI</h1>
                <p class="kc-sub">បច្ចេកវិទ្យា AI វិភាគជំងឺ និងសត្វល្អិតលើដំណាំ ដោយប្រើប្រាស់រូបថត សម្រាប់កសិករខ្មែរ។ ទំព័រនេះសម្រាប់តាមដាន គ្រប់គ្រង និងកែប្រែផែនការគម្រោងរបស់ក្រុម។</p>
                <div class="kc-teammeta" id="kc-team-chips"></div>
            </div>
        </section>

        <!-- ============ OVERDUE BANNER ============ -->
        <div class="kc-overdue-banner" id="kc-overdue-banner-wrap">
            <div class="kc-overdue-banner-inner hidden" id="kc-overdue-banner">
                <span id="kc-overdue-msg">⚠️ មានកិច្ចការហួសកំណត់</span>
                <button class="kc-btn" id="kc-overdue-scroll">មើលកិច្ចការ</button>
            </div>
        </div>

        <!-- ============ STATUS BANNER ============ -->
        <div class="kc-status-banner">
            <div class="kc-status-left"><span class="kc-dot"></span> រក្សាទុកស្វ័យប្រវត្តិនៅលើឧបករណ៍</div>
            <div class="kc-status-right">v3.1 · រចនាថ្មី</div>
        </div>

        <!-- ============ TABS ============ -->
        <nav class="kc-tabs" aria-label="ផ្ទាំងគម្រោង">
            <button class="kc-tab active" data-tab="overview">ទិដ្ឋភាពទូទៅ</button>
            <button class="kc-tab" data-tab="phases">ជំហាន &amp; កិច្ចការ</button>
            <button class="kc-tab" data-tab="system">ប្រព័ន្ធ AI</button>
            <button class="kc-tab" data-tab="risks">ហានិភ័យ</button>
            <button class="kc-tab" data-tab="teambudget">ក្រុម &amp; ថវិកា</button>
        </nav>

        <div class="kc-container">

            <!-- ===== OVERVIEW ===== -->
            <div class="kc-panel active" id="panel-overview">
                <div class="kc-stats" id="kc-stats"></div>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">សង្ខេបវឌ្ឍនភាព</h2>
                    </div>
                    <div class="kc-section-hint">ការសម្រេចកិច្ចការ គោលបំណង និងកិច្ចការហួសកំណត់</div>
                    <div class="kc-kpi-row" id="kc-kpi-row"></div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">បញ្ហា និងផលប៉ះពល់</h2>
                    </div>
                    <div class="kc-section-hint">កែប្រែអត្ថបទដោយផ្ទាល់</div>
                    <div class="kc-problem-box">
                        <textarea id="kc-problem" placeholder="ពិពណ៌នាបញ្ហា..."></textarea>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">កំណត់ត្រាកិច្ចប្រជុំ</h2>
                    </div>
                    <div class="kc-section-hint">បន្ថែមកំណត់ត្រាពីកិច្ចប្រជុំក្រុម</div>
                    <div class="kc-meeting-grid" id="kc-meeting-grid"></div>
                    <div class="kc-footer-add">
                        <input type="text" id="kc-meeting-title-input" placeholder="ចំណងជើង...">
                        <input type="text" id="kc-meeting-content-input" placeholder="សេចក្តីសង្ខេប..." style="flex:2;min-width:180px;">
                        <button class="kc-btn kc-btn-primary" id="kc-add-meeting">+ បន្ថែម</button>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">វឌ្ឍនភាពពេលវេលា</h2>
                    </div>
                    <div class="kc-section-hint">ចំនួនកិច្ចការដែលនៅសល់តាមជំហាន ប្រៀបធៀបផែនការ</div>
                    <div class="kc-burndown-wrap">
                        <canvas id="kc-burndown-canvas" width="800" height="280"></canvas>
                        <div class="kc-burndown-legend">
                            <span><span class="dot" style="background:var(--brand-600);"></span> នៅសល់ (បច្ចុប្បន្ន)</span>
                            <span><span class="dot" style="background:var(--accent-500);"></span> ផែនការ</span>
                            <span><span class="dot" style="background:var(--danger-500);"></span> ហួសកំណត់</span>
                        </div>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">សកម្មភាពថ្មីៗ</h2>
                    </div>
                    <div class="kc-section-hint">កំណត់ត្រាការផ្លាស់ប្តូររបស់សមាជិកក្រុម</div>
                    <div class="kc-activity-box" id="kc-activity"></div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">វឌ្ឍនភាពតាមជំហាន</h2>
                    </div>
                    <div class="kc-section-hint">ភាគរយកិច្ចការបានបញ្ចប់ក្នុងជំហាននីមួយៗ</div>
                    <div class="kc-barchart" id="kc-barchart"></div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">អត្ថប្រយោជន៍ និងផលប៉ះពល់</h2>
                    </div>
                    <div class="kc-table-wrap">
                        <table class="kc-table" id="kc-impact-table">
                            <thead><tr><th>ប្រភេទ</th><th>ព័ត៌មានលម្អិត</th><th class="kc-table-actions"></th></tr></thead>
                            <tbody id="kc-impact-body"></tbody>
                        </table>
                    </div>
                    <div class="kc-footer-add">
                        <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-add-impact">+ បន្ថែមជួរ</button>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">បច្ចេកវិទ្យាដែលប្រើប្រាស់</h2>
                    </div>
                    <div class="kc-table-wrap">
                        <table class="kc-table" id="kc-tech-table">
                            <thead><tr><th>ប្រភេទ</th><th>បច្ចេកវិទ្យា</th><th>ការប្រើប្រាស់</th><th class="kc-table-actions"></th></tr></thead>
                            <tbody id="kc-tech-body"></tbody>
                        </table>
                    </div>
                    <div class="kc-footer-add">
                        <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-add-tech">+ បន្ថែមជួរ</button>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">គោលបំណងគម្រោង</h2>
                    </div>
                    <div class="kc-section-hint">ចុចស្ថានភាព ដើម្បីប្តូររវាង កំពុងធ្វើ/សម្រេចបាន</div>
                    <div class="kc-goals" id="kc-goals"></div>
                    <div class="kc-footer-add">
                        <input type="text" id="kc-new-goal" placeholder="បន្ថែមគោលបំណងថ្មី...">
                        <button class="kc-btn kc-btn-primary" id="kc-add-goal">បន្ថែម</button>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">កាលវិភាគផ្លូវការ (RUA)</h2>
                    </div>
                    <div class="kc-section-hint">AI Smart Farming Competition · ប្រៀបធៀបជាមួយផែនការក្រុម</div>
                    <div class="kc-table-wrap">
                        <table class="kc-table">
                            <thead><tr><th style="width:26%;">ព្រឹត្តិការណ៍</th><th style="width:20%;">កាលបរិច្ឆេទ</th><th>កំណត់ចំណាំ</th></tr></thead>
                            <tbody>
                                <tr><td>បើកទទួលពាក្យ</td><td>29 ឧសភា 2026</td><td>ដំណាក់កាលស្រាវជ្រាវ/ប្រមូល Dataset</td></tr>
                                <tr><td>បិទទទួលពាក្យ</td><td>30 មិថុនា 2026</td><td>ចុងបញ្ចប់ជំហានទី១</td></tr>
                                <tr><td>Short List</td><td>07 កក្កដា 2026</td><td>—</td></tr>
                                <tr><td>Orientation &amp; Training 1</td><td>15 កក្កដា 2026</td><td>កើតឡើងខណៈបណ្តុះ AI / អភិវឌ្ឍ Web App</td></tr>
                                <tr><td>Semifinal</td><td>01 សីហា 2026</td><td>ត្រូវគ្នានឹង Demo Web App Live</td></tr>
                                <tr><td>Training 2</td><td>15 សីហា 2026</td><td>⚠️ កណ្តាល Pilot Test (1–20 សីហា)</td></tr>
                                <tr><td>Final</td><td>25 សីហា 2026</td><td>ត្រូវគ្នានឹង Final Presentation</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ឯកសារ និងតំណភ្ជាប់</h2>
                    </div>
                    <div class="kc-section-hint">ធនធានពាក់ព័ន្ធនឹងគម្រោង</div>
                    <div class="kc-info-grid">
                        <div class="kc-resource-card">
                            <div class="kc-resource-title">🖥️ Prototype Demo</div>
                            <div class="kc-resource-desc">គំរូចំណុចប្រទាក់ និងស្ថាបត្យកម្មប្រព័ន្ធ (Live)</div>
                            <a href="https://dashing-chebakia-f74776.netlify.app/" target="_blank" rel="noopener" class="kc-btn kc-btn-primary kc-btn-sm" style="text-decoration:none; display:inline-flex;">បើក Prototype ↗</a>
                        </div>
                        <div class="kc-resource-card">
                            <div class="kc-resource-title">🏆 គេហទំព័រប្រកួត</div>
                            <div class="kc-resource-desc">AI Smart Farming Competition · RUA</div>
                            <a href="https://sites.google.com/rua.edu.kh/ai-smart-farming-competition" target="_blank" rel="noopener" class="kc-btn kc-btn-ghost kc-btn-sm" style="text-decoration:none; display:inline-flex;">បើកគេហទំព័រ ↗</a>
                        </div>
                        <div class="kc-resource-card pending">
                            <div class="kc-resource-pending-tag">⏳ មិនទាន់មាន</div>
                            <div class="kc-resource-title">📋 លក្ខណវិនិច្ឆ័យវាយតម្លៃ</div>
                            <div class="kc-resource-desc">គេហទំព័រផ្លូវការមិនទាន់បង្ហាញ Judging Criteria លម្អិតនៅឡើយទេ។</div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- ===== PHASES ===== -->
            <div class="kc-panel" id="panel-phases">
                <section class="kc-section" style="padding-top:24px;">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">តារាងពេលវេលា (Gantt)</h2>
                    </div>
                    <div class="kc-section-hint">កំណត់ ថ្ងៃចាប់ផ្តើម/បញ្ចប់ ក្នុងជំហាននីមួយៗ</div>
                    <div class="kc-gantt" id="kc-gantt"></div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">កំណើនគម្រោង</h2>
                    </div>
                    <div class="kc-section-hint">ចុចលើដំណាំនីមួយៗ ដើម្បីមើលកិច្ចការ</div>
                    <div class="kc-timeline" id="kc-timeline"></div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ជំហាន និងកិច្ចការ</h2>
                    </div>
                    <div class="kc-section-hint">បន្ថែម កែប្រែ លុបកិច្ចការ · ចុច "☰" សម្រាប់ព័ត៌មានបន្ថែម</div>
                    <div class="kc-filter-row">
                        <label for="kc-member-filter">មើលកិច្ចការរបស់</label>
                        <select id="kc-member-filter"></select>
                        <label for="kc-task-search">ស្វែងរក</label>
                        <input type="text" id="kc-task-search" placeholder="វាយអក្សរដើម្បីស្វែងរក...">
                    </div>
                    <div id="kc-phases"></div>
                    <button class="kc-btn kc-btn-ghost" id="kc-add-phase">+ បន្ថែមជំហានថ្មី</button>
                </section>
            </div>

            <!-- ===== SYSTEM ===== -->
            <div class="kc-panel" id="panel-system">
                <section class="kc-section" style="padding-top:24px;">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ស្ថិតិ Dataset &amp; គោលដៅ Model</h2>
                    </div>
                    <div class="kc-section-hint">លេខគោលដៅសម្រាប់ការហ្វឹកហាត់ AI Model</div>
                    <div class="kc-info-grid">
                        <div class="kc-info-card"><div class="kc-info-card-num">2,000+</div><div class="kc-info-card-label">រូបថតសរុប</div></div>
                        <div class="kc-info-card"><div class="kc-info-card-num">20</div><div class="kc-info-card-label">ប្រភេទជំងឺ/សត្វល្អិត</div></div>
                        <div class="kc-info-card"><div class="kc-info-card-num">≥80%</div><div class="kc-info-card-label">ភាពត្រឹមត្រូវគោលដៅ</div></div>
                        <div class="kc-info-card"><div class="kc-info-card-num">5+</div><div class="kc-info-card-label">ខេត្តប្រមូលទិន្នន័យ</div></div>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ប្លង់ប្រព័ន្ធ (Architecture)</h2>
                    </div>
                    <div class="kc-section-hint">ជាន់ស្រទាប់ទាំង ៤ របស់ប្រព័ន្ធ</div>
                    <div class="kc-layers">
                        <div class="kc-layer user"><div class="kc-layer-tag">User</div><div class="kc-layer-items"><div class="kc-layer-item"><b>👨‍🌾 កសិករ</b>ថតរូបដំណាំដោយស្មាតហ្វូន</div><div class="kc-layer-item"><b>🌐 Frontend</b>Web App ភាសាខ្មែរ</div></div></div>
                        <div class="kc-layer backend"><div class="kc-layer-tag">Backend</div><div class="kc-layer-items"><div class="kc-layer-item"><b>⚡ FastAPI</b>REST API · Python</div><div class="kc-layer-item"><b>🔧 Image Prep</b>224×224 · Normalize</div><div class="kc-layer-item"><b>🗄️ Database</b>SQLite/PostgreSQL</div></div></div>
                        <div class="kc-layer ai"><div class="kc-layer-tag">AI Engine</div><div class="kc-layer-items"><div class="kc-layer-item"><b>🧠 MobileNetV2</b>Transfer Learning · TF Lite</div><div class="kc-layer-item"><b>📊 CNN Model</b>20 ថ្នាក់ · ≥80%</div><div class="kc-layer-item"><b>🎯 លទ្ធផល</b>ស្លាកជំងឺ + ភាគរយ</div></div></div>
                        <div class="kc-layer output"><div class="kc-layer-tag">Output</div><div class="kc-layer-items"><div class="kc-layer-item"><b>📋 លទ្ធផលខ្មែរ</b>ការវិនិច្ឆ័យ + ដំបូន្មាន</div><div class="kc-layer-item"><b>💊 ដំណោះស្រាយ</b>ឈ្មោះថ្នាំក្នុងស្រុក</div><div class="kc-layer-item"><b>✅ ល្បឿន</b>≤10 វិនាទី</div></div></div>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ដំណើរការប្រើប្រាស់ (3-Step)</h2>
                    </div>
                    <div class="kc-section-hint">ពីការថតរូប រហូតដល់ទទួលបានចម្លើយជាភាសាខ្មែរ</div>
                    <div class="kc-flow-steps">
                        <div class="kc-flow-step"><div class="kc-flow-step-num">1</div><h4>📸 ថត ឬ Upload</h4><p>កសិករថត ឬបង្ហោះរូបថតស្លឹក/ម្ជូរស្រូវ</p><ul><li>រូបភាព</li><li>ប្រភេទដំណាំ (ស្រេចចិត្ត)</li></ul></div>
                        <div class="kc-flow-step"><div class="kc-flow-step-num">2</div><h4>🧠 AI វិភាគ</h4><p>ប្រព័ន្ធកែសម្រួល និងវិភាគរូបភាពតាម CNN</p><ul><li>ប្តូរទំហំ → 224×224</li><li>CNN inference → Softmax</li></ul></div>
                        <div class="kc-flow-step"><div class="kc-flow-step-num">3</div><h4>💬 ចម្លើយខ្មែរ</h4><p>កសិករទទួលបានលទ្ធផលភ្លាមៗ</p><ul><li>ឈ្មោះជំងឺ + ភាគរយ</li><li>ថ្នាំ និងវិធីប្រើ</li></ul></div>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ឧទាហរណ៍ ជំងឺ/សត្វល្អិត</h2>
                    </div>
                    <div class="kc-section-hint">គំរូមួយចំនួននៃថ្នាក់ដែល Model នឹងសិក្សា</div>
                    <div class="kc-disease-grid">
                        <div class="kc-disease-card"><div class="kc-disease-name">Rice Blast</div><div class="kc-disease-sub">ជំងឺប្លាស់</div><span class="kc-risk high">ខ្ពស់</span></div>
                        <div class="kc-disease-card"><div class="kc-disease-name">Sheath Blight</div><div class="kc-disease-sub">ជំងឺស្រោមស្លឹក</div><span class="kc-risk high">ខ្ពស់</span></div>
                        <div class="kc-disease-card"><div class="kc-disease-name">Brown Planthopper</div><div class="kc-disease-sub">ល្អិតតុះត្នោត</div><span class="kc-risk high">ខ្ពស់</span></div>
                        <div class="kc-disease-card"><div class="kc-disease-name">Tungro Virus</div><div class="kc-disease-sub">វីរុស Tungro</div><span class="kc-risk medium">មធ្យម</span></div>
                        <div class="kc-disease-card"><div class="kc-disease-name">Stem Borer</div><div class="kc-disease-sub">មូសចូលម្ជូរ</div><span class="kc-risk medium">មធ្យម</span></div>
                        <div class="kc-disease-card"><div class="kc-disease-name">Healthy Rice</div><div class="kc-disease-sub">ស្រូវសុខភាពល្អ</div><span class="kc-risk none">ធម្មតា</span></div>
                    </div>
                </section>
            </div>

            <!-- ===== RISKS ===== -->
            <div class="kc-panel" id="panel-risks">
                <section class="kc-section" style="padding-top:24px;">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">តារាងហានិភ័យ (Risk Register)</h2>
                    </div>
                    <div class="kc-section-hint">តាមដានហានិភ័យ លទ្ធភាព ផលប៉ះពល់ និងផែនការទប់ស្កាត់</div>
                    <div class="kc-table-wrap">
                        <table class="kc-table" id="kc-risk-table">
                            <thead><tr><th style="width:22%;">ហានិភ័យ</th><th style="width:12%;">លទ្ធភាព</th><th style="width:12%;">ផលប៉ះពល់</th><th>ផែនការទប់ស្កាត់</th><th style="width:14%;">អ្នកទទួលខុសត្រូវ</th><th class="kc-table-actions"></th></tr></thead>
                            <tbody id="kc-risk-body"></tbody>
                        </table>
                    </div>
                    <div class="kc-footer-add">
                        <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-add-risk">+ បន្ថែមហានិភ័យ</button>
                    </div>
                </section>
            </div>

            <!-- ===== TEAM & BUDGET ===== -->
            <div class="kc-panel" id="panel-teambudget">
                <section class="kc-section" style="padding-top:24px;">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">សមាជិកក្រុម</h2>
                    </div>
                    <div class="kc-table-wrap">
                        <table class="kc-table" id="kc-team-table">
                            <thead><tr><th>ឈ្មោះ</th><th>តួនាទី</th><th>ទំនាក់ទំនង</th><th class="kc-table-actions"></th></tr></thead>
                            <tbody id="kc-team-body"></tbody>
                        </table>
                    </div>
                    <div class="kc-footer-add">
                        <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-add-member">+ បន្ថែមសមាជិក</button>
                    </div>
                </section>

                <section class="kc-section">
                    <div class="kc-section-header">
                        <h2 class="kc-section-title">ធនធាន និងថវិកា</h2>
                    </div>
                    <div class="kc-table-wrap">
                        <table class="kc-table" id="kc-budget-table">
                            <thead><tr><th>ប្រភេទធនធាន</th><th>ចំណាយ ($)</th><th class="kc-table-actions"></th></tr></thead>
                            <tbody id="kc-budget-body"></tbody>
                        </table>
                    </div>
                    <div class="kc-footer-add">
                        <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-add-budget">+ បន្ថែមធនធាន</button>
                    </div>
                </section>
            </div>

        </div>
    </div>

    <!-- ============ TOAST ============ -->
    <div class="kc-toast-container" id="kc-toast-container"></div>

    <!-- ============ CONFIRM OVERLAY ============ -->
    <div class="kc-confirm-overlay" id="kc-confirm-overlay">
        <div class="kc-confirm-box">
            <h3 id="kc-confirm-title">បញ្ជាក់</h3>
            <p id="kc-confirm-message">តើអ្នកប្រាកដជាចង់ធ្វើសកម្មភាពនេះមែនទេ?</p>
            <div class="kc-confirm-actions">
                <button class="kc-btn kc-btn-ghost" id="kc-confirm-cancel">បោះបង់</button>
                <button class="kc-btn kc-btn-danger" id="kc-confirm-ok">យល់ព្រម</button>
            </div>
        </div>
    </div>

    <!-- ============ SHORTCUT HELP ============ -->
    <div class="kc-shortcut-help" id="kc-shortcut-help">
        <div class="kc-shortcut-help-box">
            <h3>⌨️ ផ្លូវកាត់ក្តារចុច</h3>
            <div class="kc-shortcut-row"><span>រក្សាទុក</span><kbd>Ctrl+S</kbd></div>
            <div class="kc-shortcut-row"><span>ប្តូររបៀបងងឹត/ភ្លឺ</span><kbd>Ctrl+Shift+D</kbd></div>
            <div class="kc-shortcut-row"><span>បោះពុម្ព</span><kbd>Ctrl+Shift+P</kbd></div>
            <div class="kc-shortcut-row"><span>បង្ហាញជំនួយ</span><kbd>?</kbd></div>
            <div class="kc-close-shortcut">
                <button class="kc-btn kc-btn-ghost kc-btn-sm" id="kc-close-shortcut">បិទ</button>
            </div>
        </div>
    </div>

    <!-- ============ HIDDEN FILE INPUT ============ -->
    <input type="file" id="kc-file-input" accept=".json" style="display:none;">

    <script src="js/app.js"></script>
</body>
</html>
