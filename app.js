(function() {
            const STORAGE_KEY = "khmercrop-project-data";
            const USER_KEY = "khmercrop-current-user";
            const THEME_KEY = "khmercrop-theme";

            const defaultProblem = "ជំងឺ និងសត្វល្អិតលើដំណាំធ្វើឱ្យបាត់បង់ទិន្នផល ១៥%-៣០% ក្នុងមួយរដូវវស្សា។ កសិករភាគច្រើនធ្វើការវិនិច្ឆ័យដោយ \"ប៉ាន់ស្មាន\" ដែលនាំឱ្យប្រើប្រាស់ថ្នាំកសិកម្មខុសគោលដៅ ឬហួសកម្រិត។ បញ្ហានេះកើតឡើងញឹកញាប់នៅបាត់ដំបង កំពង់ចាម ព្រៃវែង តាកែវ និងសៀមរាប ហើយប៉ះពាល់ដល់គ្រួសារកសិករជាង ១,៧ លាននៅទូទាំងប្រទេស។";

            const defaultData = {
                problem: defaultProblem,
                team: [
                    { id: "m1", name: "ឈឿន គឹមឈុន", role: "ប្រធានក្រុម", contact: "0966291412" },
                    { id: "m2", name: "សមាជិកទី២", role: "វិទ្យាសាស្ត្រទិន្នន័យ", contact: "" },
                    { id: "m3", name: "សមាជិកទី៣", role: "កសិកម្ម", contact: "" }
                ],
                goals: [
                    { id: "g1", text: "អភិវឌ្ឍគំរូ AI Model វិភាគជំងឺ/សត្វល្អិត ≥ ២០ ប្រភេទ ភាពត្រឹមត្រូវ ≥ ៨០%",
                        done: false },
                    { id: "g2", text: "បង្កើត Web App ភាសាខ្មែរ Responsive UI សម្រាប់កសិករ", done: false },
                    { id: "g3", text: "សាកល្បង Pilot Test ជាមួយ ≥ ២០ គ្រួសារកសិករ", done: false },
                    { id: "g4", text: "ដាក់ឱ្យដំណើរការប្រព័ន្ធស្ថិរភាព ងាយស្រួលប្រើប្រាស់", done: false },
                    { id: "g5", text: "រៀបចំគោលការណ៍ការពារទិន្នន័យ និងការយល់ព្រមរបស់កសិករ (Consent) សម្រាប់រូបថតដែលប្រមូល",
                        done: false }
                ],
                budget: [
                    { id: "b1", item: "Google Colab Pro / Cloud GPU (Train Model)", cost: "50 – 100" },
                    { id: "b2", item: "Smartphone ថតរូប Dataset", cost: "0" },
                    { id: "b3", item: "Hosting", cost: "0 – 10 / ខែ" },
                    { id: "b4", item: "Web Domain and Platform APIs", cost: "0" },
                    { id: "b5", item: "ចុះធ្វើសាកល្បងផ្ទាល់ (Pilot Test)", cost: "50 – 80" },
                    { id: "b6", item: "ថវិកាបម្រុង (Contingency ~10%)", cost: "10 – 18" }
                ],
                impact: [
                    { id: "i1", category: "កើនផលិតភាព", detail: "កាត់បន្ថយការបាត់បង់ផល ១៥–២០% ដោយព្យាបាលទាន់ពេល" },
                    { id: "i2", category: "សន្សំថ្លៃដើម",
                        detail: "កាត់បន្ថយការចំណាយលើការទិញថ្នាំកសិកម្មខុសគោលដៅ" },
                    { id: "i3", category: "បរិស្ថាន", detail: "កាត់បន្ថយការប្រើប្រាស់ថ្នាំគីមិកសិកម្មហួសកម្រិត" },
                    { id: "i4", category: "ចំណូលកសិករ",
                        detail: "ដំណាំមានសុខភាពល្អ ទទួលបានទិន្នផលខ្ពស់ ងាយទាក់ទាញអ្នកទិញ" },
                    { id: "i5", category: "ចំណេះដឹង",
                        detail: "កសិករអាចស្វែងយល់ និងរៀនសូត្រពីជំងឺដំណាំដោយខ្លួនឯង" }
                ],
                techStack: [
                    { id: "c1", category: "AI / ML", tech: "Python, TF Lite, MobileNetV2",
                        usage: "វិភាគនិងសម្គាល់ជំងឺ/សត្វល្អិត" },
                    { id: "c2", category: "Web Frontend", tech: "HTML5, CSS3, JavaScript (SolidJS/Tailwind CSS)",
                        usage: "ឆ្លើយតបគ្រប់ឧបករណ៍ (Responsive)" },
                    { id: "c3", category: "Web Features",
                        tech: "Upload Button, Camera Access, History, Result Dashboard",
                        usage: "ដំណើរការងាយស្រួល ណែនាំកសិករ ២៤/៧" },
                    { id: "c4", category: "Backend / AI", tech: "FastAPI + Python + CNN",
                        usage: "ទទួលរូបភាព → វិភាគ → ឆ្លើយតបលទ្ធផល" },
                    { id: "c5", category: "Database", tech: "SQLite / PostgreSQL",
                        usage: "រក្សាទុកប្រវត្តិនៃការពិនិត្យដំណាំ" }
                ],
                risks: [
                    { id: "r1", risk: "គុណភាព Dataset មិនគ្រប់គ្រាន់ ឬមិនសមតុល្យរវាងថ្នាក់ជំងឺ", likelihood: "medium",
                        impact: "high", mitigation: "ប្រមូលបន្ថែមរូបភាពពីច្រើនខេត្ត និងប្រើ Data Augmentation",
                        owner: "វិទ្យាសាស្ត្រទិន្នន័យ" },
                    { id: "r2", risk: "ភាពត្រឹមត្រូវម៉ូដែល (Accuracy) មិនដល់គោលដៅ ៨០%", likelihood: "medium",
                        impact: "high", mitigation: "សាកល្បង Architecture ច្រើនបែប និង Fine-tune Hyperparameters",
                        owner: "ក្រុម AI" },
                    { id: "r3", risk: "អ៊ីនធឺណិត ឬសញ្ញាទូរស័ព្ទខ្សោយនៅតំបន់ជនបទ", likelihood: "high", impact: "medium",
                        mitigation: "បន្ថែមរបៀបប្រើប្រាស់ Offline-first ឬកាត់បន្ថយទំហំរូបភាព", owner: "ក្រុម Frontend" },
                    { id: "r4", risk: "ការចំណាយលើសពីថវិកាកំណត់", likelihood: "low", impact: "medium",
                        mitigation: "ប្រើប្រាស់សេវាឥតគិតថ្លៃ (Free-tier) និងតាមដានចំណាយប្រចាំសប្តាហ៍", owner: "ប្រធានក្រុម" },
                    { id: "r5", risk: "Online Training Session 2 (15 សីហា) របស់ RUA ធ្លាក់ចូលកណ្តាលរយៈពេល Pilot Test (1–20 សីហា) របស់ក្រុម",
                        likelihood: "medium", impact: "medium",
                        mitigation: "រៀបចំកាលវិភាគចុះកសិករជាមុន និងចាត់តាំងសមាជិកម្នាក់ចូលរួម Training ខណៈអ្នកផ្សេងបន្តការងារ Pilot",
                        owner: "ប្រធានក្រុម" }
                ],
                meetings: [
                    { id: "meet1", title: "កិច្ចប្រជុំដំបូង — កំណត់គោលដៅ",
                        content: "ឯកភាពលើគោលដៅសំខាន់ៗ៖ AI Model ≥80%, Web App ភាសាខ្មែរ, Pilot Test ជាមួយ ២០ គ្រួសារ",
                        date: "2026-05-15" },
                    { id: "meet2", title: "ពិនិត្យវឌ្ឍនភាព AI Model",
                        content: "MobileNetV2 កំពុងហ្វឹកហាត់ លទ្ធផលបឋម ~65% ។ ត្រូវការ augment បន្ថែម",
                        date: "2026-06-10" }
                ],
                phases: [
                    { id: "p1", name: "ស្រាវជ្រាវ និងប្រមូល Dataset", dateRange: "ឧសភា–មិថុនា ២០២៦",
                        start: "2026-05-01", end: "2026-06-30",
                        tasks: [
                            { id: "t1", text: "ប្រមូលរូបថតជំងឺដំណាំ ≥ ២,០០០ រូប", done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "" },
                            { id: "t2", text: "ស្រាវជ្រាវបណ្តុំទិន្នន័យអន្តរជាតិ PlantVillage", done: false,
                                assignee: "", notes: "", link: "", due: "", priority: "", dependsOn: "" },
                            { id: "t3", text: "ស្រាវជ្រាវ និងរចនា UI/UX សម្រាប់ Web App", done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "" }
                        ] },
                    { id: "p2", name: "បណ្តុះ AI Model", dateRange: "កក្កដា ២០២៦", start: "2026-07-01",
                        end: "2026-07-15",
                        tasks: [
                            { id: "t4", text: "ហ្វឹកហាត់ (Train) គំរូ CNN ដោយ MobileNetV2", done: false,
                                assignee: "", notes: "", link: "", due: "", priority: "", dependsOn: "t1" },
                            { id: "t5", text: "វាយតម្លៃ Accuracy ≥ ៨០%", done: false, assignee: "", notes: "",
                                link: "", due: "", priority: "", dependsOn: "t4" },
                            { id: "t6", text: "នាំចេញម៉ូដែលជា TensorFlow Lite", done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "t5" }
                        ] },
                    { id: "p3", name: "អភិវឌ្ឍ Web App", dateRange: "កក្កដា ២០២៦", start: "2026-07-10",
                        end: "2026-07-31",
                        tasks: [
                            { id: "t7", text: "បង្កើតចំណុចប្រទាក់ (Web Frontend) ភាសាខ្មែរ", done: false,
                                assignee: "", notes: "", link: "", due: "", priority: "", dependsOn: "t3" },
                            { id: "t8", text: "ភ្ជាប់ទៅ FastAPI Backend", done: false, assignee: "", notes: "",
                                link: "", due: "", priority: "", dependsOn: "t7" },
                            { id: "t9", text: "សាកល្បងប្រព័ន្ធផ្ទៃក្នុងក្រុម", done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "t8" }
                        ] },
                    { id: "p4", name: "Pilot Test", dateRange: "១–២០ សីហា ២០២៦", start: "2026-08-01",
                        end: "2026-08-20",
                        tasks: [
                            { id: "t10", text: "ដាក់ឱ្យសាកល្បងជាមួយ ≥ ២០ គ្រួសារកសិករ", done: false,
                                assignee: "", notes: "", link: "", due: "", priority: "", dependsOn: "t9" },
                            { id: "t11", text: "ប្រមូលមតិត្រឡប់ (Feedback)", done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "t10" },
                            { id: "t12", text: "កែប្រែ Bug និងលម្អិត UI", done: false, assignee: "", notes: "",
                                link: "", due: "", priority: "", dependsOn: "t11" }
                        ] },
                    { id: "p5", name: "Final Presentation", dateRange: "២៥ សីហា ២០២៦", start: "2026-08-21",
                        end: "2026-08-25",
                        tasks: [
                            { id: "t13", text: "រៀបចំបទបង្ហាញចុងក្រោយ", done: false, assignee: "", notes: "",
                                link: "", due: "", priority: "", dependsOn: "t12" },
                            { id: "t14", text: "Demo Web App Live", done: false, assignee: "", notes: "",
                                link: "", due: "", priority: "", dependsOn: "t13" },
                            { id: "t15", text: "បង្ហាញលទ្ធផល AI Accuracy និង Pilot Test", done: false,
                                assignee: "", notes: "", link: "", due: "", priority: "", dependsOn: "t14" },
                            { id: "t16", text: "កែលេខផ្នែក (Section 9 ស្ទួន + Section 10 បាត់) ក្នុងឯកសារសំណើគម្រោង និងបំពេញឈ្មោះសមាជិកទី២/៣ មុនដាក់ស្នើ",
                                done: false, assignee: "", notes: "រកឃើញកំឡុងពេលពិនិត្យ PDF ។", link: "", due: "",
                                priority: "medium", dependsOn: "" }
                        ] }
                ],
                expandedPhase: "p1",
                expandedTasks: {},
                memberFilter: "all",
                activity: []
            };

            let data = null;
            let printMode = false;
            let searchQuery = "";
            let currentUser = "";
            let pendingConfirm = null;
            let theme = "light";

            function loadTheme() {
                try { theme = localStorage.getItem(THEME_KEY) || "light"; } catch (e) { theme = "light"; }
                if (theme === "dark") {
                    document.documentElement.setAttribute("data-theme", "dark");
                } else {
                    document.documentElement.removeAttribute("data-theme");
                }
                updateThemeToggle();
            }

            function toggleTheme() {
                theme = (theme === "light") ? "dark" : "light";
                try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
                if (theme === "dark") {
                    document.documentElement.setAttribute("data-theme", "dark");
                } else {
                    document.documentElement.removeAttribute("data-theme");
                }
                updateThemeToggle();
                toast(theme === "dark" ? "🌙 បានប្តូរទៅរបៀបងងឹត" : "☀️ បានប្តូរទៅរបៀបភ្លឺ");
            }

            function updateThemeToggle() {
                const track = document.getElementById("kc-dark-track");
                if (track) {
                    track.classList.toggle("active", theme === "dark");
                }
            }

            function toast(msg, duration) {
                duration = duration || 2800;
                const container = document.getElementById("kc-toast-container");
                const el = document.createElement("div");
                el.className = "kc-toast";
                el.textContent = msg;
                container.appendChild(el);
                setTimeout(() => {
                    el.classList.add("hiding");
                    setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 400);
                }, duration);
            }

            function confirmAction(title, message, onOk) {
                const overlay = document.getElementById("kc-confirm-overlay");
                document.getElementById("kc-confirm-title").textContent = title;
                document.getElementById("kc-confirm-message").textContent = message;
                overlay.classList.add("open");
                pendingConfirm = onOk;
            }

            document.getElementById("kc-confirm-cancel").addEventListener("click", function() {
                document.getElementById("kc-confirm-overlay").classList.remove("open");
                pendingConfirm = null;
            });
            document.getElementById("kc-confirm-ok").addEventListener("click", function() {
                document.getElementById("kc-confirm-overlay").classList.remove("open");
                if (pendingConfirm) { pendingConfirm();
                    pendingConfirm = null; }
            });
            document.getElementById("kc-confirm-overlay").addEventListener("click", function(e) {
                if (e.target === this) {
                    this.classList.remove("open");
                    pendingConfirm = null;
                }
            });

            function loadCurrentUser() {
                try { currentUser = JSON.parse(localStorage.getItem(USER_KEY) || '""'); } catch (e) { currentUser = ""; }
            }

            function saveCurrentUser() {
                try { localStorage.setItem(USER_KEY, JSON.stringify(currentUser)); } catch (e) { console.error(
                        "Storage error", e); }
            }

            function logActivity(text) {
                const who = currentUser || "អ្នកប្រើមិនស្គាល់ឈ្មោះ";
                data.activity.unshift({ id: uid("a"), who, text, time: new Date().toISOString() });
                if (data.activity.length > 60) data.activity.length = 60;
                save();
                renderActivity();
            }

            function timeAgo(iso) {
                const diffMs = Date.now() - new Date(iso).getTime();
                const mins = Math.floor(diffMs / 60000);
                if (mins < 1) return "ឥឡូវនេះ";
                if (mins < 60) return mins + " នាទីមុន";
                const hrs = Math.floor(mins / 60);
                if (hrs < 24) return hrs + " ម៉ោងមុន";
                const days = Math.floor(hrs / 24);
                return days + " ថ្ងៃមុន";
            }

            function uid(prefix) { return prefix + "_" + Math.random().toString(36).slice(2, 9); }

            function todayStr() {
                const d = new Date();
                return d.toISOString().slice(0, 10);
            }

            function isOverdue(t) {
                if (t.done || !t.due) return false;
                return t.due < todayStr();
            }

            function countOverdue() {
                let n = 0;
                data.phases.forEach(p => p.tasks.forEach(t => { if (isOverdue(t)) n++; }));
                return n;
            }

            function getAllTasks() {
                const tasks = [];
                data.phases.forEach(p => {
                    p.tasks.forEach(t => {
                        tasks.push({ ...t, phaseId: p.id, phaseName: p.name });
                    });
                });
                return tasks;
            }

            function getTaskById(id) {
                for (const p of data.phases) {
                    for (const t of p.tasks) {
                        if (t.id === id) return t;
                    }
                }
                return null;
            }

            function getPhaseByTaskId(id) {
                for (const p of data.phases) {
                    for (const t of p.tasks) {
                        if (t.id === id) return p;
                    }
                }
                return null;
            }

            function withDefaults(loaded) {
                const merged = JSON.parse(JSON.stringify(defaultData));
                if (!loaded) return merged;
                Object.keys(merged).forEach(k => { if (loaded[k] !== undefined) merged[k] = loaded[k]; });
                merged.phases.forEach(p => {
                    if (p.start === undefined) p.start = "";
                    if (p.end === undefined) p.end = "";
                    p.tasks.forEach(t => {
                        if (t.notes === undefined) t.notes = "";
                        if (t.link === undefined) t.link = "";
                        if (t.due === undefined) t.due = "";
                        if (t.priority === undefined) t.priority = "";
                        if (t.dependsOn === undefined) t.dependsOn = "";
                    });
                });
                if (!merged.expandedTasks) merged.expandedTasks = {};
                if (!merged.memberFilter) merged.memberFilter = "all";
                if (!Array.isArray(merged.activity)) merged.activity = [];
                if (!Array.isArray(merged.risks)) merged.risks = JSON.parse(JSON.stringify(defaultData.risks));
                if (!Array.isArray(merged.meetings)) merged.meetings = JSON.parse(JSON.stringify(defaultData
                    .meetings));
                return merged;
            }

            function load() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEY);
                    data = raw ? withDefaults(JSON.parse(raw)) : JSON.parse(JSON.stringify(defaultData));
                } catch (e) {
                    data = JSON.parse(JSON.stringify(defaultData));
                }
                loadCurrentUser();
                loadTheme();
                render();
            }

            function save() {
                try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.error(
                        "Storage error", e); }
            }

            function el(tag, cls, html) {
                const e = document.createElement(tag);
                if (cls) e.className = cls;
                if (html !== undefined) e.innerHTML = html;
                return e;
            }

            document.querySelectorAll(".kc-tab").forEach(btn => {
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".kc-tab").forEach(b => b.classList.remove("active"));
                    document.querySelectorAll(".kc-panel").forEach(p => p.classList.remove("active"));
                    btn.classList.add("active");
                    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
                    if (btn.dataset.tab === "overview") renderBurndown();
                });
            });

            const dropdownToggle = document.getElementById("kc-dropdown-toggle");
            const dropdownMenu = document.getElementById("kc-dropdown-menu");
            dropdownToggle.addEventListener("click", function(e) {
                e.stopPropagation();
                dropdownMenu.classList.toggle("open");
            });
            document.addEventListener("click", function() {
                dropdownMenu.classList.remove("open");
            });
            dropdownMenu.addEventListener("click", function(e) {
                e.stopPropagation();
            });

            document.getElementById("kc-toggle-dark").addEventListener("click", toggleTheme);

            document.getElementById("kc-shortcut-help-btn").addEventListener("click", function() {
                document.getElementById("kc-shortcut-help").classList.toggle("open");
                dropdownMenu.classList.remove("open");
            });
            document.getElementById("kc-close-shortcut").addEventListener("click", function() {
                document.getElementById("kc-shortcut-help").classList.remove("open");
            });
            document.getElementById("kc-shortcut-help").addEventListener("click", function(e) {
                if (e.target === this) this.classList.remove("open");
            });

            document.addEventListener("keydown", function(e) {
                if (e.ctrlKey && e.key === "s") {
                    e.preventDefault();
                    save();
                    toast("💾 បានរក្សាទុក");
                }
                if (e.ctrlKey && e.shiftKey && (e.key === "D" || e.key === "d")) {
                    e.preventDefault();
                    toggleTheme();
                }
                if (e.ctrlKey && e.shiftKey && (e.key === "P" || e.key === "p")) {
                    e.preventDefault();
                    document.getElementById("kc-print").click();
                }
                if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
                    const help = document.getElementById("kc-shortcut-help");
                    help.classList.toggle("open");
                }
                if (e.key === "Escape") {
                    document.getElementById("kc-shortcut-help").classList.remove("open");
                }
            });

            document.getElementById("kc-export-json").addEventListener("click", function() {
                const json = JSON.stringify(data, null, 2);
                const blob = new Blob([json], { type: "application/json;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "khmercrop-data-backup.json";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                toast("💾 បាននាំចេញ JSON");
                dropdownMenu.classList.remove("open");
            });

            document.getElementById("kc-import-json").addEventListener("click", function() {
                document.getElementById("kc-file-input").click();
                dropdownMenu.classList.remove("open");
            });

            document.getElementById("kc-file-input").addEventListener("change", function(e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function(ev) {
                    try {
                        const imported = JSON.parse(ev.target.result);
                        if (!imported.phases || !imported.team || !imported.goals) {
                            toast("❌ ទិន្នន័យមិនត្រឹមត្រូវ", 3000);
                            return;
                        }
                        confirmAction("នាំចូលទិន្នន័យ",
                            "តើអ្នកចង់ជំនួសទិន្នន័យបច្ចុប្បន្នទាំងអស់មែនទេ?",
                            function() {
                                data = withDefaults(imported);
                                save();
                                render();
                                toast("📂 បាននាំចូលដោយជោគជ័យ");
                            }
                        );
                    } catch (err) {
                        toast("❌ កំហុសក្នុងការអាន JSON", 3000);
                        console.error(err);
                    }
                };
                reader.readAsText(file);
                this.value = "";
            });

            document.getElementById("kc-reset-data").addEventListener("click", function() {
                dropdownMenu.classList.remove("open");
                confirmAction("កំណត់ទិន្នន័យឡើងវិញ",
                    "តើអ្នកប្រាកដជាចង់លុបទិន្នន័យទាំងអស់ និងត្រឡប់ទៅកំណត់ដើមវិញមែនទេ?",
                    function() {
                        data = JSON.parse(JSON.stringify(defaultData));
                        save();
                        render();
                        toast("🗑️ បានកំណត់ឡើងវិញ");
                    }
                );
            });

            function renderOverdueBanner() {
                const banner = document.getElementById("kc-overdue-banner");
                const msg = document.getElementById("kc-overdue-msg");
                const count = countOverdue();
                if (count === 0) {
                    banner.classList.add("hidden");
                    return;
                }
                banner.classList.remove("hidden");
                msg.textContent = "⚠️ មានកិច្ចការហួសកំណត់ចំនួន " + count + " កិច្ចការ";
            }

            document.getElementById("kc-overdue-scroll").addEventListener("click", function() {
                document.querySelectorAll(".kc-tab").forEach(b => b.classList.remove("active"));
                document.querySelectorAll(".kc-panel").forEach(p => p.classList.remove("active"));
                document.querySelector(".kc-tab[data-tab='phases']").classList.add("active");
                document.getElementById("panel-phases").classList.add("active");
                data.phases.forEach(p => { data.expandedPhase = p.id; });
                save();
                renderPhases();
                setTimeout(() => {
                    const firstOverdue = document.querySelector(".kc-badge-overdue");
                    if (firstOverdue) {
                        firstOverdue.closest(".kc-phase").scrollIntoView({ behavior: "smooth",
                            block: "center" });
                    }
                }, 200);
            });

            function renderStats() {
                const totalTasks = data.phases.reduce((a, p) => a + p.tasks.length, 0);
                const doneTasks = data.phases.reduce((a, p) => a + p.tasks.filter(t => t.done).length, 0);
                const doneGoals = data.goals.filter(g => g.done).length;
                const pct = totalTasks ? Math.round(doneTasks / totalTasks * 100) : 0;
                const overdue = countOverdue();
                const stats = [
                    { icon: "📊", num: pct + "%", label: "កិច្ចការបានបញ្ចប់", alert: false },
                    { icon: "📋", num: doneTasks + " / " + totalTasks, label: "កិច្ចការសរុប", alert: false },
                    { icon: "🎯", num: doneGoals + " / " + data.goals.length, label: "គោលបំណងសម្រេច",
                    alert: false },
                    { icon: "👥", num: data.team.length, label: "សមាជិកក្រុម", alert: false },
                    { icon: "⚠️", num: overdue, label: "កិច្ចការហួសកំណត់", alert: overdue > 0 }
                ];
                const wrap = document.getElementById("kc-stats");
                wrap.innerHTML = "";
                stats.forEach(({ icon, num, label, alert }) => {
                    const card = el("div", "kc-stat" + (alert ? " alert" : ""));
                    card.innerHTML =
                        `<span class="kc-stat-icon">${icon}</span><div class="kc-stat-num">${num}</div><div class="kc-stat-label">${label}</div>`;
                    wrap.appendChild(card);
                });
            }

            function renderKPI() {
                const wrap = document.getElementById("kc-kpi-row");
                if (!wrap) return;
                wrap.innerHTML = "";
                const totalTasks = data.phases.reduce((a, p) => a + p.tasks.length, 0);
                const doneTasks = data.phases.reduce((a, p) => a + p.tasks.filter(t => t.done).length, 0);
                const pct = totalTasks ? Math.round(doneTasks / totalTasks * 100) : 0;
                const doneGoals = data.goals.filter(g => g.done).length;
                const overdue = countOverdue();
                const r = 54,
                    circumference = 2 * Math.PI * r;
                const dash = circumference * (pct / 100);

                const donutWrap = el("div", "kc-donut-wrap");
                donutWrap.innerHTML = `
              <svg width="132" height="132" viewBox="0 0 132 132">
                <circle cx="66" cy="66" r="${r}" fill="none" stroke="var(--bg-surface-2)" stroke-width="14"/>
                <circle cx="66" cy="66" r="${r}" fill="none" stroke="url(#kcGrad)" stroke-width="14"
                  stroke-dasharray="${dash} ${circumference-dash}" stroke-linecap="round"
                  transform="rotate(-90 66 66)"/>
                <defs>
                  <linearGradient id="kcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--brand-500)"/>
                    <stop offset="100%" stop-color="var(--accent-500)"/>
                  </linearGradient>
                </defs>
              </svg>`;
                const label = el("div", "kc-donut-label");
                label.appendChild(el("div", "kc-donut-pct", pct + "%"));
                label.appendChild(el("div", "kc-donut-sub", "បានបញ្ចប់"));
                donutWrap.appendChild(label);
                wrap.appendChild(donutWrap);

                const legend = el("div", "kc-kpi-legend");
                const rows = [
                    ["var(--brand-600)", "កិច្ចការបានបញ្ចប់", doneTasks + " / " + totalTasks],
                    ["var(--accent-500)", "គោលបំណងសម្រេច", doneGoals + " / " + data.goals.length],
                    ["var(--danger-500)", "កិច្ចការហួសកំណត់", String(overdue)]
                ];
                rows.forEach(([color, label2, val]) => {
                    const row = el("div", "kc-kpi-legend-row");
                    const dot = el("span", "kc-kpi-dot");
                    dot.style.background = color;
                    row.appendChild(dot);
                    row.appendChild(document.createTextNode(label2));
                    row.appendChild(el("b", null, val));
                    legend.appendChild(row);
                });
                wrap.appendChild(legend);
            }

            function renderBurndown() {
                const canvas = document.getElementById("kc-burndown-canvas");
                if (!canvas) return;
                const ctx = canvas.getContext("2d");
                const rect = canvas.parentElement.getBoundingClientRect();
                const w = Math.min(800, rect.width - 32);
                const h = 280;
                canvas.width = w * window.devicePixelRatio || w;
                canvas.height = h * window.devicePixelRatio || h;
                canvas.style.width = w + "px";
                canvas.style.height = h + "px";
                ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

                const phases = data.phases;
                if (phases.length === 0) {
                    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim() ||
                        "#64748b";
                    ctx.font = "14px sans-serif";
                    ctx.textAlign = "center";
                    ctx.fillText("គ្មានទិន្នន័យ", w / 2, h / 2);
                    return;
                }

                const totalTasks = phases.reduce((a, p) => a + p.tasks.length, 0);
                if (totalTasks === 0) {
                    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim() ||
                        "#64748b";
                    ctx.font = "14px sans-serif";
                    ctx.textAlign = "center";
                    ctx.fillText("មិនទាន់មានកិច្ចការ", w / 2, h / 2);
                    return;
                }

                const n = phases.length;
                const pad = { top: 28, bottom: 32, left: 36, right: 20 };
                const chartW = w - pad.left - pad.right;
                const chartH = h - pad.top - pad.bottom;

                let remaining = [];
                let cumRemaining = 0;
                for (let i = 0; i < n; i++) {
                    const p = phases[i];
                    const done = p.tasks.filter(t => t.done).length;
                    const total = p.tasks.length;
                    cumRemaining += (total - done);
                    remaining.push(cumRemaining);
                }

                const planned = [];
                for (let i = 0; i < n; i++) {
                    planned.push(totalTasks * (1 - (i / (n - 1 || 1))));
                }

                let cumOverdue = 0;
                const overdueData = [];
                for (let i = 0; i < n; i++) {
                    const p = phases[i];
                    const ov = p.tasks.filter(t => isOverdue(t)).length;
                    cumOverdue += ov;
                    overdueData.push(cumOverdue);
                }

                const maxVal = Math.max(totalTasks, ...remaining, ...planned, ...overdueData) + 1 || 1;
                const xScale = chartW / (n - 1 || 1);
                const yScale = chartH / maxVal;

                const getX = (i) => pad.left + i * xScale;
                const getY = (v) => pad.top + chartH - v * yScale;

                const ink = getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim() ||
                    "#0b1a2f";
                const inkFaint = getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim() ||
                    "#6b7f96";
                const paddy500 = getComputedStyle(document.documentElement).getPropertyValue("--brand-600").trim() ||
                    "#0d9488";
                const riceGold = getComputedStyle(document.documentElement).getPropertyValue("--accent-500").trim() ||
                    "#f59e0b";
                const clay = getComputedStyle(document.documentElement).getPropertyValue("--danger-500").trim() ||
                    "#ef4444";
                const surface2 = getComputedStyle(document.documentElement).getPropertyValue("--bg-surface-2").trim() ||
                    "#f0f4fa";

                ctx.clearRect(0, 0, w, h);

                ctx.strokeStyle = surface2;
                ctx.lineWidth = 0.5;
                for (let i = 0; i <= 5; i++) {
                    const y = pad.top + chartH * (i / 5);
                    ctx.beginPath();
                    ctx.moveTo(pad.left, y);
                    ctx.lineTo(w - pad.right, y);
                    ctx.stroke();
                    ctx.fillStyle = inkFaint;
                    ctx.font = "9px sans-serif";
                    ctx.textAlign = "right";
                    ctx.textBaseline = "middle";
                    ctx.fillText(Math.round(maxVal * (1 - i / 5)), pad.left - 4, y);
                }

                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillStyle = inkFaint;
                ctx.font = "9px sans-serif";
                for (let i = 0; i < n; i++) {
                    const x = getX(i);
                    const label = phases[i].name.length > 12 ? phases[i].name.slice(0, 10) + "…" : phases[i].name;
                    ctx.fillText(label, x, pad.top + chartH + 4);
                }

                ctx.strokeStyle = riceGold;
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    const x = getX(i);
                    const y = getY(planned[i]);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.strokeStyle = clay;
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    const x = getX(i);
                    const y = getY(overdueData[i]);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                ctx.strokeStyle = paddy500;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    const x = getX(i);
                    const y = getY(remaining[i]);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();

                for (let i = 0; i < n; i++) {
                    const x = getX(i);
                    ctx.fillStyle = riceGold;
                    ctx.beginPath();
                    ctx.arc(x, getY(planned[i]), 4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = clay;
                    ctx.beginPath();
                    ctx.arc(x, getY(overdueData[i]), 3.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = paddy500;
                    ctx.beginPath();
                    ctx.arc(x, getY(remaining[i]), 5, 0, Math.PI * 2);
                    ctx.fill();
                }

                const legX = pad.left + 10;
                const legY = pad.top + 10;
                ctx.font = "10px sans-serif";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                const legendItems = [
                    { color: paddy500, label: "នៅសល់" },
                    { color: riceGold, label: "ផែនការ" },
                    { color: clay, label: "ហួសកំណត់" }
                ];
                let legXOff = 0;
                legendItems.forEach(item => {
                    ctx.fillStyle = item.color;
                    ctx.fillRect(legX + legXOff, legY, 12, 12);
                    ctx.fillStyle = ink;
                    ctx.fillText(item.label, legX + legXOff + 16, legY);
                    legXOff += 16 + ctx.measureText(item.label).width + 20;
                });
            }

            function renderMeetings() {
                const grid = document.getElementById("kc-meeting-grid");
                grid.innerHTML = "";
                if (!data.meetings || data.meetings.length === 0) {
                    grid.appendChild(el("div", "kc-section-hint", "មិនទាន់មានកំណត់ត្រាកិច្ចប្រជុំ"));
                    return;
                }
                data.meetings.forEach((m, idx) => {
                    const card = el("div", "kc-meeting-card");
                    const meta = el("div", "kc-meeting-meta");
                    meta.appendChild(el("span", null, "📅 " + (m.date || "មិនមាន")));
                    card.appendChild(meta);

                    const titleInput = el("input", "kc-task-input");
                    titleInput.value = m.title;
                    titleInput.style.fontWeight = "700";
                    titleInput.style.fontSize = "16px";
                    titleInput.addEventListener("change", e => { m.title = e.target.value;
                        save();
                        renderMeetings(); });
                    const titleWrap = el("div", "kc-meeting-title");
                    titleWrap.appendChild(titleInput);
                    card.appendChild(titleWrap);

                    const contentArea = el("textarea");
                    contentArea.value = m.content || "";
                    contentArea.rows = 2;
                    contentArea.style.width = "100%";
                    contentArea.style.fontSize = "14px";
                    contentArea.style.border = "1px solid var(--border-light)";
                    contentArea.style.borderRadius = "var(--radius-sm)";
                    contentArea.style.padding = "6px 8px";
                    contentArea.style.margin = "6px 0";
                    contentArea.style.background = "var(--bg-surface)";
                    contentArea.style.color = "var(--text-primary)";
                    contentArea.addEventListener("change", e => { m.content = e.target.value;
                        save(); });
                    const contentWrap = el("div", "kc-meeting-content");
                    contentWrap.appendChild(contentArea);
                    card.appendChild(contentWrap);

                    const actions = el("div", "kc-meeting-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.meetings.splice(idx, 1);
                        save();
                        render(); });
                    actions.appendChild(del);
                    card.appendChild(actions);
                    grid.appendChild(card);
                });
            }

            function renderGantt() {
                const wrap = document.getElementById("kc-gantt");
                if (!wrap) return;
                wrap.innerHTML = "";
                const dated = data.phases.filter(p => p.start && p.end);
                let rangeStart, rangeEnd,
                    useRealDates = dated.length > 0;
                if (useRealDates) {
                    rangeStart = Math.min(...dated.map(p => new Date(p.start).getTime()));
                    rangeEnd = Math.max(...dated.map(p => new Date(p.end).getTime()));
                    if (rangeEnd <= rangeStart) rangeEnd = rangeStart + 86400000;
                }
                const n = data.phases.length || 1;
                data.phases.forEach((p, idx) => {
                    const total = p.tasks.length;
                    const done = p.tasks.filter(t => t.done).length;
                    const pct = total ? Math.round(done / total * 100) : 0;

                    const row = el("div", "kc-gantt-row");
                    row.appendChild(el("div", "kc-gantt-label", (idx + 1) + ". " + p.name));
                    const track = el("div", "kc-gantt-track");
                    const bar = el("div", "kc-gantt-bar");

                    if (p.start && p.end && useRealDates) {
                        const s = new Date(p.start).getTime(),
                            e = new Date(p.end).getTime();
                        const leftPct = ((s - rangeStart) / (rangeEnd - rangeStart)) * 100;
                        const widthPct = Math.max(((e - s) / (rangeEnd - rangeStart)) * 100, 3);
                        bar.style.left = leftPct + "%";
                        bar.style.width = widthPct + "%";
                    } else {
                        bar.classList.add("nodate");
                        bar.style.left = ((idx / n) * 100) + "%";
                        bar.style.width = ((1 / n) * 100) + "%";
                    }
                    const pctSpan = el("span", "kc-gantt-bar-pct", (p.start && p.end) ? pct + "%" : "គ្មាន");
                    bar.appendChild(pctSpan);
                    track.appendChild(bar);
                    row.appendChild(track);
                    wrap.appendChild(row);
                });

                const foot = el("div", "kc-gantt-foot");
                if (useRealDates) {
                    foot.appendChild(el("span", null, new Date(rangeStart).toISOString().slice(0, 10)));
                    foot.appendChild(el("span", null, new Date(rangeEnd).toISOString().slice(0, 10)));
                } else {
                    foot.appendChild(el("span", null, "កំណត់ ថ្ងៃចាប់ផ្តើម/បញ្ចប់"));
                }
                wrap.appendChild(foot);
            }

            function renderRiskTable() {
                const body = document.getElementById("kc-risk-body");
                if (!body) return;
                body.innerHTML = "";
                const levelLabels = { low: "ទាប", medium: "មធ្យម", high: "ខ្ពស់" };
                data.risks.forEach((r, idx) => {
                    const tr = el("tr");

                    const tdRisk = el("td");
                    const riskInput = el("textarea");
                    riskInput.rows = 2;
                    riskInput.value = r.risk;
                    riskInput.addEventListener("change", e => { r.risk = e.target.value;
                        save(); });
                    tdRisk.appendChild(riskInput);
                    tr.appendChild(tdRisk);

                    ["likelihood", "impact"].forEach(field => {
                        const td = el("td");
                        const badgeClass = r[field] === "high" ? "high" : (r[field] === "medium" ?
                            "medium" : "none");
                        const select = el("select", "kc-risk-select " + badgeClass);
                        ["low", "medium", "high"].forEach(val => {
                            const opt = el("option", null, levelLabels[val]);
                            opt.value = val;
                            if (r[field] === val) opt.selected = true;
                            select.appendChild(opt);
                        });
                        select.addEventListener("change", e => { r[field] = e.target.value;
                            save();
                            renderRiskTable(); });
                        td.appendChild(select);
                        tr.appendChild(td);
                    });

                    const tdMit = el("td");
                    const mitInput = el("textarea");
                    mitInput.rows = 2;
                    mitInput.value = r.mitigation;
                    mitInput.addEventListener("change", e => { r.mitigation = e.target.value;
                        save(); });
                    tdMit.appendChild(mitInput);
                    tr.appendChild(tdMit);

                    const tdOwner = el("td");
                    const ownerInput = el("input");
                    ownerInput.value = r.owner || "";
                    ownerInput.addEventListener("change", e => { r.owner = e.target.value;
                        save(); });
                    tdOwner.appendChild(ownerInput);
                    tr.appendChild(tdOwner);

                    const tdAction = el("td", "kc-table-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.risks.splice(idx, 1);
                        save();
                        render(); });
                    tdAction.appendChild(del);
                    tr.appendChild(tdAction);

                    body.appendChild(tr);
                });
            }

            function renderTeamChips() {
                const wrap = document.getElementById("kc-team-chips");
                wrap.innerHTML = "";
                data.team.forEach(m => { wrap.appendChild(el("div", "kc-chip", m.name + (m.role ? " · " + m.role :
                    ""))); });
            }

            function stalkSvg(pct) {
                const fillH = 60 * (pct / 100);
                const y = 65 - fillH;
                return `<svg class="kc-stalk-svg" viewBox="0 0 36 70" xmlns="http://www.w3.org/2000/svg">
              <line x1="18" y1="65" x2="18" y2="8" stroke="var(--border-light)" stroke-width="3" stroke-linecap="round"/>
              <line x1="18" y1="65" x2="18" y2="${y}" stroke="var(--brand-600)" stroke-width="3" stroke-linecap="round"/>
              <circle cx="18" cy="${Math.max(y-2,6)}" r="5" fill="${pct>=100?'var(--accent-500)':'var(--brand-300)'}"/>
            </svg>`;
            }

            function renderTimeline() {
                const wrap = document.getElementById("kc-timeline");
                wrap.innerHTML = "";
                data.phases.forEach(p => {
                    const total = p.tasks.length;
                    const done = p.tasks.filter(t => t.done).length;
                    const pct = total ? Math.round(done / total * 100) : 0;
                    const item = el("div", "kc-stalk-wrap" + (data.expandedPhase === p.id ? " active" :
                    ""));
                    item.innerHTML = stalkSvg(pct);
                    item.appendChild(el("div", "kc-stalk-name", p.name));
                    item.appendChild(el("div", "kc-stalk-date", p.dateRange + " · " + pct + "%"));
                    item.addEventListener("click", () => { data.expandedPhase = p.id;
                        save();
                        render(); });
                    wrap.appendChild(item);
                });
            }

            function renderBarChart() {
                const wrap = document.getElementById("kc-barchart");
                wrap.innerHTML = "";
                data.phases.forEach(p => {
                    const total = p.tasks.length;
                    const done = p.tasks.filter(t => t.done).length;
                    const pct = total ? Math.round(done / total * 100) : 0;
                    const row = el("div", "kc-bar-row");
                    row.appendChild(el("div", "kc-bar-label", p.name));
                    const track = el("div", "kc-bar-track");
                    const fill = el("div", "kc-bar-fill");
                    fill.style.width = pct + "%";
                    track.appendChild(fill);
                    row.appendChild(track);
                    row.appendChild(el("div", "kc-bar-pct", pct + "%"));
                    wrap.appendChild(row);
                });
            }

            function renderPhases() {
                const wrap = document.getElementById("kc-phases");
                wrap.innerHTML = "";
                data.phases.forEach((p, pIdx) => {
                    const card = el("div", "kc-phase");
                    const total = p.tasks.length;
                    const done = p.tasks.filter(t => t.done).length;

                    const head = el("div", "kc-phase-head");
                    const titleWrap = el("div", "kc-phase-title");
                    titleWrap.appendChild(el("span", "kc-phase-index", String(pIdx + 1)));
                    const nameInput = el("input", "kc-task-input");
                    nameInput.value = p.name;
                    nameInput.style.fontWeight = "600";
                    nameInput.style.fontSize = "16px";
                    nameInput.addEventListener("click", e => e.stopPropagation());
                    nameInput.addEventListener("change", e => { p.name = e.target.value;
                        save();
                        renderTimeline();
                        renderBarChart(); });
                    titleWrap.appendChild(nameInput);
                    head.appendChild(titleWrap);

                    const rightWrap = el("div");
                    rightWrap.style.display = "flex";
                    rightWrap.style.alignItems = "center";
                    rightWrap.style.gap = "10px";
                    rightWrap.appendChild(el("div", "kc-phase-progress", done + "/" + total + " រួច"));
                    const delBtn = el("button", "kc-icon-btn", "✕");
                    delBtn.title = "លុបជំហាន";
                    delBtn.addEventListener("click", e => {
                        e.stopPropagation();
                        if (confirm("តើអ្នកចង់លុបជំហាន \"" + p.name + "\" មែនទេ?")) {
                            logActivity("បានលុបជំហាន៖ " + p.name);
                            data.phases.splice(pIdx, 1);
                            save();
                            render();
                        }
                    });
                    rightWrap.appendChild(delBtn);
                    head.appendChild(rightWrap);

                    head.addEventListener("click", () => { data.expandedPhase = (data.expandedPhase === p
                            .id) ? null : p.id;
                        save();
                        render(); });
                    card.appendChild(head);

                    if (printMode || data.expandedPhase === p.id) {
                        const body = el("div", "kc-phase-body");

                        const dateRow = el("div", "kc-phase-daterow");
                        const dateInput = el("input");
                        dateInput.value = p.dateRange;
                        dateInput.addEventListener("change", e => { p.dateRange = e.target.value;
                            save();
                            renderTimeline(); });
                        dateRow.appendChild(document.createTextNode("ស្លាកកាលបរិច្ឆេទ:"));
                        dateRow.appendChild(dateInput);
                        body.appendChild(dateRow);

                        const ganttDateRow = el("div", "kc-gantt-datesrow");
                        ganttDateRow.appendChild(document.createTextNode("Gantt — ចាប់ផ្តើម:"));
                        const startInput = el("input");
                        startInput.type = "date";
                        startInput.value = p.start || "";
                        startInput.addEventListener("change", e => { p.start = e.target.value;
                            save();
                            renderGantt(); });
                        ganttDateRow.appendChild(startInput);
                        ganttDateRow.appendChild(document.createTextNode("បញ្ចប់:"));
                        const endInput = el("input");
                        endInput.type = "date";
                        endInput.value = p.end || "";
                        endInput.addEventListener("change", e => { p.end = e.target.value;
                            save();
                            renderGantt(); });
                        ganttDateRow.appendChild(endInput);
                        body.appendChild(ganttDateRow);

                        const visibleTasks = p.tasks.filter(t => {
                            const memberOk = (data.memberFilter && data.memberFilter !== "all") ?
                                (t.assignee || "").trim() === data.memberFilter :
                                true;
                            const searchOk = searchQuery ? t.text.toLowerCase().includes(
                                searchQuery) : true;
                            return memberOk && searchOk;
                        });

                        if (visibleTasks.length === 0 && p.tasks.length > 0) {
                            body.appendChild(el("div", "kc-section-hint",
                                "គ្មានកិច្ចការត្រូវនឹងលក្ខខណ្ឌ"));
                        }

                        visibleTasks.forEach((t) => {
                            const tIdx = p.tasks.indexOf(t);
                            const taskWrap = el("div", "kc-task");
                            const row = el("div", "kc-task-main");
                            const check = el("div", "kc-task-check" + (t.done ? " done" : ""));
                            check.addEventListener("click", () => {
                                if (!t.done && t.dependsOn) {
                                    const depTask = getTaskById(t.dependsOn);
                                    if (depTask && !depTask.done) {
                                        toast("⚠️ ពឹងផ្អែកលើ \"" + depTask.text +
                                            "\" ដែលមិនទាន់បញ្ចប់", 2800);
                                        return;
                                    }
                                }
                                t.done = !t.done;
                                logActivity((t.done ? "បានបញ្ចប់កិច្ចការ៖ " :
                                    "បានបើកឡើងវិញ៖ ") + t.text);
                                save();
                                render();
                            });
                            row.appendChild(check);

                            const textInput = el("input", "kc-task-input" + (t.done ? " done" : ""));
                            textInput.value = t.text;
                            textInput.addEventListener("change", e => { t.text = e.target.value;
                                save(); });
                            row.appendChild(textInput);

                            if (t.priority) {
                                const labels = { high: "អាទិភាពខ្ពស់", medium: "មធ្យម", low: "ទាប" };
                                row.appendChild(el("span", "kc-priority " + t.priority, labels[t
                                    .priority] || t.priority));
                            }

                            if (t.due) {
                                const chip = el("span", "kc-due-chip" + (isOverdue(t) ? " overdue" :
                                    ""), t.due);
                                row.appendChild(chip);
                            }
                            if (isOverdue(t)) {
                                row.appendChild(el("span", "kc-badge-overdue", "ហួសកំណត់"));
                            }

                            if (t.dependsOn) {
                                const depTask = getTaskById(t.dependsOn);
                                const depOk = depTask && depTask.done;
                                const depSpan = el("span", "kc-task-depends" + (depOk ? " dep-ok" :
                                    " dep-missing"));
                                depSpan.textContent = "⤷ " + (depTask ? depTask.text.slice(0, 20) + (
                                    depTask.text.length > 20 ? "…" : "") : "លុប");
                                depSpan.title = "ពឹងផ្អែកលើ: " + (depTask ? depTask.text : "លុបចោល");
                                row.appendChild(depSpan);
                            }

                            const assignee = el("input", "kc-task-assignee");
                            assignee.placeholder = "អ្នកទទួលខុសត្រូវ";
                            assignee.value = t.assignee || "";
                            assignee.addEventListener("change", e => { t.assignee = e.target.value;
                                save();
                                renderMemberFilter(); });
                            row.appendChild(assignee);

                            const toggleExtra = el("button", "kc-icon-btn", "☰");
                            toggleExtra.title = "ព័ត៌មានបន្ថែម";
                            toggleExtra.addEventListener("click", () => {
                                data.expandedTasks[t.id] = !data.expandedTasks[t.id];
                                save();
                                render();
                            });
                            row.appendChild(toggleExtra);

                            const del = el("button", "kc-icon-btn", "✕");
                            del.addEventListener("click", () => {
                                const dependents = [];
                                data.phases.forEach(p2 => {
                                    p2.tasks.forEach(t2 => {
                                        if (t2.dependsOn === t.id) dependents.push(t2
                                        .text);
                                    });
                                });
                                if (dependents.length > 0) {
                                    if (!confirm("កិច្ចការនេះត្រូវបានពឹងផ្អែកដោយ: " +
                                            dependents.join(", ") +
                                            "\nតើនៅតែចង់លុបមែនទេ?")) {
                                        return;
                                    }
                                }
                                logActivity("បានលុបកិច្ចការ៖ " + t.text);
                                p.tasks.splice(tIdx, 1);
                                save();
                                render();
                            });
                            row.appendChild(del);

                            taskWrap.appendChild(row);

                            const extra = el("div", "kc-task-extra" + (data.expandedTasks[t.id] ?
                                " open" : ""));

                            const dueRow = el("div", "kc-task-extra-row");
                            dueRow.appendChild(el("label", null, "កាលកំណត់:"));
                            const dueInput = el("input");
                            dueInput.type = "date";
                            dueInput.value = t.due || "";
                            dueInput.addEventListener("change", e => { t.due = e.target.value;
                                save();
                                render(); });
                            dueRow.appendChild(dueInput);

                            dueRow.appendChild(el("label", null, "អាទិភាព:"));
                            const prioSelect = el("select", "kc-priority-select");
                            [
                                ["", "គ្មាន"],
                                ["high", "ខ្ពស់"],
                                ["medium", "មធ្យម"],
                                ["low", "ទាប"]
                            ].forEach(([val, label]) => {
                                const opt = el("option", null, label);
                                opt.value = val;
                                if (t.priority === val) opt.selected = true;
                                prioSelect.appendChild(opt);
                            });
                            prioSelect.addEventListener("change", e => { t.priority = e.target
                                    .value;
                                save();
                                render(); });
                            dueRow.appendChild(prioSelect);
                            extra.appendChild(dueRow);

                            const depRow = el("div", "kc-task-extra-row");
                            depRow.appendChild(el("label", null, "ពឹងផ្អែកលើ:"));
                            const depSelect = el("select");
                            depSelect.style.fontSize = "12px";
                            depSelect.style.border = "1px solid var(--border-light)";
                            depSelect.style.borderRadius = "var(--radius-sm)";
                            depSelect.style.padding = "4px 8px";
                            depSelect.style.background = "var(--bg-surface)";
                            depSelect.style.color = "var(--text-primary)";
                            const noneOpt = el("option", null, "គ្មាន");
                            noneOpt.value = "";
                            depSelect.appendChild(noneOpt);
                            data.phases.forEach(p2 => {
                                p2.tasks.forEach(t2 => {
                                    if (t2.id === t.id) return;
                                    const opt = el("option", null, p2.name + ": " + t2
                                        .text.slice(0, 30) + (t2.text.length > 30 ?
                                            "…" : ""));
                                    opt.value = t2.id;
                                    if (t.dependsOn === t2.id) opt.selected = true;
                                    depSelect.appendChild(opt);
                                });
                            });
                            depSelect.addEventListener("change", e => {
                                const val = e.target.value;
                                if (val) {
                                    let current = val;
                                    const visited = new Set();
                                    while (current) {
                                        if (current === t.id) {
                                            toast("⚠️ មិនអាចពឹងផ្អែកលើខ្លួនឯង",
                                                2500);
                                            depSelect.value = t.dependsOn || "";
                                            return;
                                        }
                                        if (visited.has(current)) break;
                                        visited.add(current);
                                        const dep = getTaskById(current);
                                        current = dep ? dep.dependsOn : "";
                                    }
                                }
                                t.dependsOn = val;
                                save();
                                render();
                            });
                            depRow.appendChild(depSelect);
                            extra.appendChild(depRow);

                            const notesArea = el("textarea");
                            notesArea.placeholder = "ចំណាំ...";
                            notesArea.value = t.notes || "";
                            notesArea.addEventListener("change", e => { t.notes = e.target.value;
                                save(); });
                            const linkInput = el("input");
                            linkInput.placeholder = "តំណឯកសារ / URL";
                            linkInput.value = t.link || "";
                            linkInput.addEventListener("change", e => { t.link = e.target.value;
                                save(); });
                            extra.appendChild(notesArea);
                            extra.appendChild(linkInput);
                            taskWrap.appendChild(extra);

                            body.appendChild(taskWrap);
                        });

                        const addRow = el("div", "kc-add-task-row");
                        const newTaskInput = el("input");
                        newTaskInput.placeholder = "បន្ថែមកិច្ចការថ្មី...";
                        newTaskInput.addEventListener("keydown", e => { if (e.key === "Enter") { addTask
                                (); } });
                        const addBtn = el("button", "kc-btn kc-btn-primary kc-btn-sm", "+ បន្ថែម");

                        function addTask() {
                            const val = newTaskInput.value.trim();
                            if (!val) return;
                            p.tasks.push({ id: uid("t"), text: val, done: false, assignee: "",
                                notes: "", link: "", due: "", priority: "", dependsOn: "" });
                            logActivity("បានបន្ថែមកិច្ចការ៖ " + val);
                            newTaskInput.value = "";
                            save();
                            render();
                        }
                        addBtn.addEventListener("click", addTask);
                        addRow.appendChild(newTaskInput);
                        addRow.appendChild(addBtn);
                        body.appendChild(addRow);

                        card.appendChild(body);
                    }
                    wrap.appendChild(card);
                });
            }

            function renderGoals() {
                const wrap = document.getElementById("kc-goals");
                wrap.innerHTML = "";
                data.goals.forEach((g, idx) => {
                    const card = el("div", "kc-goal-card");
                    card.appendChild(el("div", "kc-goal-num", "គោលបំណងទី " + (idx + 1)));
                    const textInput = el("input", "kc-task-input");
                    textInput.value = g.text;
                    textInput.style.width = "100%";
                    textInput.addEventListener("change", e => { g.text = e.target.value;
                        save(); });
                    card.appendChild(textInput);

                    const rowBottom = el("div");
                    rowBottom.style.display = "flex";
                    rowBottom.style.justifyContent = "space-between";
                    rowBottom.style.alignItems = "center";
                    rowBottom.style.marginTop = "10px";
                    const status = el("span", "kc-goal-status" + (g.done ? " done" : ""), g.done ?
                        "សម្រេចបាន" : "កំពុងធ្វើ");
                    status.addEventListener("click", () => {
                        g.done = !g.done;
                        logActivity((g.done ? "សម្រេចគោលបំណង៖ " : "បើកឡើងវិញ៖ ") + g.text);
                        save();
                        render();
                    });
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.goals.splice(idx, 1);
                        save();
                        render(); });
                    rowBottom.appendChild(status);
                    rowBottom.appendChild(del);
                    card.appendChild(rowBottom);
                    wrap.appendChild(card);
                });
            }

            function renderTeamTable() {
                const body = document.getElementById("kc-team-body");
                body.innerHTML = "";
                data.team.forEach((m, idx) => {
                    const tr = el("tr");
                    ["name", "role", "contact"].forEach(field => {
                        const td = el("td");
                        const input = el("input");
                        input.value = m[field] || "";
                        input.addEventListener("change", e => { m[field] = e.target.value;
                            save();
                            renderTeamChips();
                            renderStats(); });
                        td.appendChild(input);
                        tr.appendChild(td);
                    });
                    const tdAction = el("td", "kc-table-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.team.splice(idx, 1);
                        save();
                        render(); });
                    tdAction.appendChild(del);
                    tr.appendChild(tdAction);
                    body.appendChild(tr);
                });
            }

            function renderBudgetTable() {
                const body = document.getElementById("kc-budget-body");
                body.innerHTML = "";
                data.budget.forEach((b, idx) => {
                    const tr = el("tr");
                    const tdItem = el("td");
                    const itemInput = el("input");
                    itemInput.value = b.item;
                    itemInput.addEventListener("change", e => { b.item = e.target.value;
                        save(); });
                    tdItem.appendChild(itemInput);
                    tr.appendChild(tdItem);

                    const tdCost = el("td");
                    const costInput = el("input");
                    costInput.value = b.cost;
                    costInput.addEventListener("change", e => { b.cost = e.target.value;
                        save(); });
                    tdCost.appendChild(costInput);
                    tr.appendChild(tdCost);

                    const tdAction = el("td", "kc-table-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.budget.splice(idx, 1);
                        save();
                        render(); });
                    tdAction.appendChild(del);
                    tr.appendChild(tdAction);
                    body.appendChild(tr);
                });
            }

            function renderImpactTable() {
                const body = document.getElementById("kc-impact-body");
                body.innerHTML = "";
                data.impact.forEach((row, idx) => {
                    const tr = el("tr");
                    const tdCat = el("td");
                    const catInput = el("input");
                    catInput.value = row.category;
                    catInput.addEventListener("change", e => { row.category = e.target.value;
                        save(); });
                    tdCat.appendChild(catInput);
                    tr.appendChild(tdCat);

                    const tdDetail = el("td");
                    const detailInput = el("textarea");
                    detailInput.rows = 2;
                    detailInput.value = row.detail;
                    detailInput.addEventListener("change", e => { row.detail = e.target.value;
                        save(); });
                    tdDetail.appendChild(detailInput);
                    tr.appendChild(tdDetail);

                    const tdAction = el("td", "kc-table-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.impact.splice(idx, 1);
                        save();
                        render(); });
                    tdAction.appendChild(del);
                    tr.appendChild(tdAction);
                    body.appendChild(tr);
                });
            }

            function renderTechTable() {
                const body = document.getElementById("kc-tech-body");
                body.innerHTML = "";
                data.techStack.forEach((row, idx) => {
                    const tr = el("tr");
                    ["category", "tech", "usage"].forEach(field => {
                        const td = el("td");
                        const input = el("input");
                        input.value = row[field] || "";
                        input.addEventListener("change", e => { row[field] = e.target.value;
                            save(); });
                        td.appendChild(input);
                        tr.appendChild(td);
                    });
                    const tdAction = el("td", "kc-table-actions");
                    const del = el("button", "kc-icon-btn", "✕");
                    del.addEventListener("click", () => { data.techStack.splice(idx, 1);
                        save();
                        render(); });
                    tdAction.appendChild(del);
                    tr.appendChild(tdAction);
                    body.appendChild(tr);
                });
            }

            function renderUserPicker() {
                const select = document.getElementById("kc-current-user");
                const names = Array.from(new Set(data.team.map(m => m.name).filter(Boolean)));
                select.innerHTML = "";
                const noneOpt = el("option", null, "ជ្រើសរើសឈ្មោះ");
                noneOpt.value = "";
                select.appendChild(noneOpt);
                names.forEach(n => {
                    const opt = el("option", null, n);
                    opt.value = n;
                    select.appendChild(opt);
                });
                select.value = names.includes(currentUser) ? currentUser : "";
            }

            function renderActivity() {
                const wrap = document.getElementById("kc-activity");
                wrap.innerHTML = "";
                if (!data.activity || data.activity.length === 0) {
                    wrap.appendChild(el("div", "kc-activity-empty", "មិនទាន់មានសកម្មភាព"));
                    return;
                }
                data.activity.slice(0, 20).forEach(a => {
                    const row = el("div", "kc-activity-item");
                    row.appendChild(el("span", "kc-activity-who", a.who));
                    row.appendChild(el("span", null, a.text));
                    row.appendChild(el("span", "kc-activity-time", timeAgo(a.time)));
                    wrap.appendChild(row);
                });
            }

            function renderProblem() {
                document.getElementById("kc-problem").value = data.problem;
            }

            function renderMemberFilter() {
                const select = document.getElementById("kc-member-filter");
                const names = Array.from(new Set(data.team.map(m => m.name).filter(Boolean)));
                const current = data.memberFilter || "all";
                select.innerHTML = "";
                const allOpt = el("option", null, "អ្នកទាំងអស់");
                allOpt.value = "all";
                select.appendChild(allOpt);
                names.forEach(n => {
                    const opt = el("option", null, n);
                    opt.value = n;
                    select.appendChild(opt);
                });
                select.value = names.includes(current) || current === "all" ? current : "all";
            }

            function render() {
                renderStats();
                renderKPI();
                renderTeamChips();
                renderUserPicker();
                renderProblem();
                renderActivity();
                renderBarChart();
                renderImpactTable();
                renderTechTable();
                renderGoals();
                renderMemberFilter();
                renderTimeline();
                renderGantt();
                renderPhases();
                renderTeamTable();
                renderBudgetTable();
                renderRiskTable();
                renderMeetings();
                renderOverdueBanner();
                updateThemeToggle();
                requestAnimationFrame(() => renderBurndown());
            }

            document.getElementById("kc-problem").addEventListener("change", e => { data.problem = e.target.value;
                save(); });

            document.getElementById("kc-current-user").addEventListener("change", e => {
                currentUser = e.target.value;
                saveCurrentUser();
            });

            document.getElementById("kc-task-search").addEventListener("input", e => {
                searchQuery = e.target.value.trim().toLowerCase();
                renderPhases();
            });

            document.getElementById("kc-member-filter").addEventListener("change", e => {
                data.memberFilter = e.target.value;
                save();
                renderPhases();
            });

            document.getElementById("kc-print").addEventListener("click", () => {
                const prevActiveTab = document.querySelector(".kc-tab.active").dataset.tab;
                printMode = true;
                document.querySelectorAll(".kc-panel").forEach(p => p.classList.add("active"));
                renderPhases();
                window.print();
                printMode = false;
                document.querySelectorAll(".kc-panel").forEach(p => p.classList.remove("active"));
                document.getElementById("panel-" + prevActiveTab).classList.add("active");
                renderPhases();
            });

            document.getElementById("kc-add-phase").addEventListener("click", () => {
                const p = { id: uid("p"), name: "ជំហានថ្មី", dateRange: "", start: "", end: "", tasks: [] };
                data.phases.push(p);
                data.expandedPhase = p.id;
                logActivity("បានបន្ថែមជំហានថ្មី");
                save();
                render();
            });

            document.getElementById("kc-add-goal").addEventListener("click", () => {
                const input = document.getElementById("kc-new-goal");
                const val = input.value.trim();
                if (!val) return;
                data.goals.push({ id: uid("g"), text: val, done: false });
                logActivity("បានបន្ថែមគោលបំណង៖ " + val);
                input.value = "";
                save();
                render();
            });

            document.getElementById("kc-add-member").addEventListener("click", () => {
                data.team.push({ id: uid("m"), name: "សមាជិកថ្មី", role: "", contact: "" });
                save();
                render();
            });

            document.getElementById("kc-add-budget").addEventListener("click", () => {
                data.budget.push({ id: uid("b"), item: "ធនធានថ្មី", cost: "0" });
                save();
                render();
            });

            document.getElementById("kc-add-impact").addEventListener("click", () => {
                data.impact.push({ id: uid("i"), category: "ប្រភេទថ្មី", detail: "" });
                save();
                render();
            });

            document.getElementById("kc-add-tech").addEventListener("click", () => {
                data.techStack.push({ id: uid("c"), category: "", tech: "", usage: "" });
                save();
                render();
            });

            document.getElementById("kc-add-risk").addEventListener("click", () => {
                data.risks.push({ id: uid("r"), risk: "ហានិភ័យថ្មី", likelihood: "medium", impact: "medium",
                    mitigation: "", owner: "" });
                save();
                render();
            });

            document.getElementById("kc-add-meeting").addEventListener("click", () => {
                const titleInput = document.getElementById("kc-meeting-title-input");
                const contentInput = document.getElementById("kc-meeting-content-input");
                const title = titleInput.value.trim();
                const content = contentInput.value.trim();
                if (!title) { toast("សូមបញ្ចូលចំណងជើង", 2000); return; }
                data.meetings.push({ id: uid("meet"), title, content: content || "", date: todayStr() });
                logActivity("បានបន្ថែមកំណត់ត្រាកិច្ចប្រជុំ៖ " + title);
                titleInput.value = "";
                contentInput.value = "";
                save();
                render();
            });

            document.getElementById("kc-export").addEventListener("click", () => {
                let md = "# KhmerCrop AI — របាយការណ៍គម្រោង\n\n";
                md += "## បញ្ហា និងផលប៉ះពល់\n" + data.problem + "\n\n";
                md += "## គោលបំណងគម្រោង\n";
                data.goals.forEach((g, i) => { md += (i + 1) + ". [" + (g.done ? "x" : " ") + "] " + g.text +
                    "\n"; });
                md += "\n## ជំហាន និងកិច្ចការ\n";
                data.phases.forEach((p, i) => {
                    md += "\n### ជំហានទី" + (i + 1) + ": " + p.name + " (" + p.dateRange + ")\n";
                    p.tasks.forEach(t => {
                        md += "- [" + (t.done ? "x" : " ") + "] " + t.text + (t.assignee ? " — " + t
                            .assignee : "");
                        if (t.dependsOn) {
                            const dep = getTaskById(t.dependsOn);
                            md += " (ពឹងផ្អែក: " + (dep ? dep.text.slice(0, 30) + (dep.text
                                .length > 30 ? "…" : "") : "មិនមាន") + ")";
                        }
                        md += "\n";
                        if (t.notes) md += "  > " + t.notes + "\n";
                        if (t.link) md += "  តំណ: " + t.link + "\n";
                    });
                });
                md += "\n## កំណត់ត្រាកិច្ចប្រជុំ\n";
                if (data.meetings && data.meetings.length > 0) {
                    data.meetings.forEach(m => {
                        md += "- **" + m.title + "** (" + (m.date || "") + ")\n  " + (m.content || "") +
                            "\n";
                    });
                } else {
                    md += "មិនមានកំណត់ត្រាកិច្ចប្រជុំ\n";
                }
                md += "\n## អត្ថប្រយោជន៍ និងផលប៉ះពល់\n";
                data.impact.forEach(row => { md += "- **" + row.category + "**: " + row.detail + "\n"; });
                md += "\n## បច្ចេកវិទ្យាដែលប្រើប្រាស់\n";
                data.techStack.forEach(row => { md += "- **" + row.category + "**: " + row.tech + " — " + row
                        .usage + "\n"; });
                md += "\n## តារាងហានិភ័យ\n";
                data.risks.forEach(r => { md += "- **" + r.risk + "** — លទ្ធភាព: " + r.likelihood +
                        ", ផលប៉ះពល់: " + r.impact + ", ទប់ស្កាត់: " + r.mitigation + " (" + r
                        .owner + ")\n"; });
                md += "\n## សមាជិកក្រុម\n";
                data.team.forEach(m => { md += "- " + m.name + " (" + m.role + ") " + m.contact + "\n"; });
                md += "\n## ធនធាន និងថវិកា\n";
                data.budget.forEach(b => { md += "- " + b.item + ": $" + b.cost + "\n"; });

                const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "khmercrop-ai-report.md";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                toast("⬇ បាននាំចេញ Markdown");
            });

            let resizeTimer;
            window.addEventListener("resize", () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => renderBurndown(), 300);
            });

            load();
        })();
