const upgrades = [

    {
        id: "tongue",
        name: "Tongue",
        description: "Licks the ice cream for you.",
        image: "Assets/tongue.png",
        baseCost: 15,
        owned: Number(localStorage.getItem("tongueOwned")) || 0,
        lps: 0.1,
        discovered: false
    },

    {
        id: "kiddie",
        name: "Kiddie",
        description: "Absolutely loves ice cream.",
        image: "Assets/kiddie.png",
        baseCost: 100,
        owned: Number(localStorage.getItem("kiddieOwned")) || 0,
        lps: 1,
        discovered: false
    },

    {
        id: "teenager",
        name: "Teenager",
        description: "Consumes alarming amounts of ice cream.",
        image: "Assets/teenager.png",
        baseCost: 1100,
        owned: Number(localStorage.getItem("teenagerOwned")) || 0,
        lps: 8,
        discovered: false
    },

    {
        id: "adult",
        name: "Adult",
        description: "Has disposable income for frozen treats.",
        image: "Assets/adult.png",
        baseCost: 10000,
        owned: Number(localStorage.getItem("adultOwned")) || 0,
        lps: 50,
        discovered: false
    },

    {
        id: "family",
        name: "Family",
        description: "A family outing means lots of ice cream.",
        image: "Assets/family.png",
        baseCost: 100000,
        owned: Number(localStorage.getItem("familyOwned")) || 0,
        lps: 250,
        discovered: false
    },

    {
        id: "birthdayParty",
        name: "Birthday Party",
        description: "Every birthday needs ice cream.",
        image: "Assets/birthday-party.png",
        baseCost: 1000000,
        owned: Number(localStorage.getItem("birthdayPartyOwned")) || 0,
        lps: 1200,
        discovered: false
    },

    {
        id: "fieldTrip",
        name: "Field Trip",
        description: "A bus full of excited students.",
        image: "Assets/field-trip.png",
        baseCost: 10000000,
        owned: Number(localStorage.getItem("fieldTripOwned")) || 0,
        lps: 6000,
        discovered: false
    },

    {
        id: "summerCamp",
        name: "Summer Camp",
        description: "Hundreds of campers want dessert.",
        image: "Assets/summer-camp.png",
        baseCost: 100000000,
        owned: Number(localStorage.getItem("summerCampOwned")) || 0,
        lps: 30000,
        discovered: false
    },

    {
        id: "stand",
        name: "Ice Cream Stand",
        description: "Your first real business.",
        image: "Assets/stand.png",
        baseCost: 1000000000,
        owned: Number(localStorage.getItem("standOwned")) || 0,
        lps: 150000,
        discovered: false
    },

    {
        id: "shop",
        name: "Ice Cream Shop",
        description: "A storefront dedicated to ice cream.",
        image: "Assets/shop.png",
        baseCost: 10000000000,
        owned: Number(localStorage.getItem("shopOwned")) || 0,
        lps: 750000,
        discovered: false
    },

    {
        id: "mall",
        name: "Mall Location",
        description: "A prime location with constant traffic.",
        image: "Assets/mall.png",
        baseCost: 100000000000,
        owned: Number(localStorage.getItem("mallOwned")) || 0,
        lps: 3500000,
        discovered: false
    },

    {
        id: "truck",
        name: "Ice Cream Truck",
        description: "Bring ice cream directly to customers.",
        image: "Assets/truck.png",
        baseCost: 1000000000000,
        owned: Number(localStorage.getItem("truckOwned")) || 0,
        lps: 15000000,
        discovered: false
    },

    {
        id: "scoopGenerator",
        name: "Scoop Generator",
        description: "Automates deliciousness.",
        image: "Assets/scoop-generator.png",
        baseCost: 10000000000000,
        owned: Number(localStorage.getItem("scoopGeneratorOwned")) || 0,
        lps: 75000000,
        discovered: false
    },

    {
        id: "factory",
        name: "Ice Cream Factory",
        description: "Mass production begins.",
        image: "Assets/factory.png",
        baseCost: 100000000000000,
        owned: Number(localStorage.getItem("factoryOwned")) || 0,
        lps: 350000000,
        discovered: false
    },

    {
        id: "shipping",
        name: "Shipping Network",
        description: "Deliver frozen treats everywhere.",
        image: "Assets/shipping.png",
        baseCost: 1000000000000000,
        owned: Number(localStorage.getItem("shippingOwned")) || 0,
        lps: 1500000000,
        discovered: false
    },

    {
        id: "globalChain",
        name: "Global Chain",
        description: "Customers across the entire world.",
        image: "Assets/global-chain.png",
        baseCost: 10000000000000000,
        owned: Number(localStorage.getItem("globalChainOwned")) || 0,
        lps: 8000000000,
        discovered: false
    },

    {
        id: "planetaryFranchise",
        name: "Planetary Franchise",
        description: "Every continent serves your ice cream.",
        image: "Assets/planetary-franchise.png",
        baseCost: 100000000000000000,
        owned: Number(localStorage.getItem("planetaryFranchiseOwned")) || 0,
        lps: 40000000000,
        discovered: false   
    },

    {
        id: "interstellarNetwork",
        name: "Interstellar Network",
        description: "Your deliveries span entire star systems.",
        image: "Assets/interstellar-network.png",
        baseCost: 1000000000000000000,
        owned: Number(localStorage.getItem("interstellarNetworkOwned")) || 0,
        lps: 200000000000,
        discovered: false
    },

    {
        id: "rocket",
        name: "Rocket Program",
        description: "Freeze-dried treats in space.",
        image: "Assets/rocket.png",
        baseCost: 10000000000000000000,
        owned: Number(localStorage.getItem("rocketOwned")) || 0,
        lps: 1000000000000,
        discovered: false
    },

    {
        id: "aliens",
        name: "Alien Customers",
        description: "Extraterrestrials discover ice cream.",
        image: "Assets/aliens.png",
        baseCost: 100000000000000000000,
        owned: Number(localStorage.getItem("aliensOwned")) || 0,
        lps: 5000000000000,
        discovered: false
    },

    {
        id: "portal",
        name: "Portal Technology",
        description: "New customers arrive from unknown dimensions.",
        image: "Assets/portal.png",
        baseCost: 1000000000000000000000,
        owned: Number(localStorage.getItem("portalOwned")) || 0,
        lps: 25000000000000,
        discovered: false
    },

    {
        id: "mirrorFranchise",
        name: "Mirror Franchise",
        description: "Alternate universes sell your brand too.",
        image: "Assets/mirror-franchise.png",
        baseCost: 10000000000000000000000,
        owned: Number(localStorage.getItem("mirrorFranchiseOwned")) || 0,
        lps: 100000000000000,
        discovered: false
    },

    {
        id: "multiversalDelivery",
        name: "Multiversal Delivery",
        description: "Infinite realities. Infinite customers.",
        image: "Assets/multiversal-delivery.png",
        baseCost: 100000000000000000000000,
        owned: Number(localStorage.getItem("multiversalDeliveryOwned")) || 0,
        lps: 500000000000000,
        discovered: false
    },

    {
        id: "iceCreamGod",
        name: "Ice Cream Creator",
        description: "You are believed to be the creator of all frozen desserts.",
        image: "Assets/icecream-god.png",
        baseCost: 10000000000000000000000000,
        owned: Number(localStorage.getItem("iceCreamGodOwned")) || 0,
        lps: 10000000000000000,
        discovered: false
    }

];
const clickUpgrades = [

    {
        id: "biggerTongue",
        name: "👅 Bigger Tongue",
        cost: 100,
        bonus: 1,
        type: "additive",
        purchased: false,
        discovered: false
    },

    {
        id: "woodenSpoon",
        name: "🥄 Wooden Spoon",
        cost: 1000,
        bonus: 5,
        type: "additive",
        purchased: false,
        discovered: false
    },

    {
        id: "silverSpoon",
        name: "🥄 Silver Spoon",
        cost: 10000,
        bonus: 25,
        type: "additive",
        purchased: false,
        discovered: false
    },

    {
        id: "professionalTaster",
        name: "⭐ Professional Taster",
        cost: 100000,
        bonus: 2,
        type: "multiplier",
        purchased: false,
        discovered: false
    },

    {
        id: "flavorExpert",
        name: "🏆 Flavor Expert",
        cost: 1000000,
        bonus: 2,
        type: "multiplier",
        purchased: false,
        discovered: false
    },
    {
    id: "tripleScoop",
    name: "🍨 Triple Scoop",
    cost: 100000,
    bonus: 100,
    type: "additive",
    purchased: false,
    discovered: false
},

{
    id: "iceCreamCannon",
    name: "🚀 Ice Cream Cannon",
    cost: 1000000,
    bonus: 500,
    type: "additive",
    purchased: false,
    discovered: false
},

{
    id: "quantumScoop",
    name: "⚛️ Quantum Scoop",
    cost: 10000000,
    bonus: 10,
    type: "multiplier",
    purchased: false,
    discovered: false
},

{
    id: "coneOfAbundance",
    name: "🍦 Cone of Abundance",
    cost: 100000000,
    bonus: 10000,
    type: "additive",
    purchased: false,
    discovered: false
},
{
    id: "frozenScientist",
    name: "🔬 Frozen Treat Scientist",
    cost: 5000000,
    bonus: 3,
    type: "multiplier",
    purchased: false,
    discovered: false
},

{
    id: "masterLicker",
    name: "🎯 Master Licker",
    cost: 500000000,
    bonus: 50,
    type: "multiplier",
    purchased: false,
    discovered: false
},

{
    id: "greatConeBlessing",
    name: "👑 Great Cone's Reward",
    cost: 500000000000000,
    bonus: 100000,
    type: "multiplier",
    purchased: false,
    discovered: false
}

];
const achievements = [
    {
        id: "firstLick",
        name: "First Lick",
        description: "Earn your first lick.",
        unlocked: false
    },
    {
        id: "iceCreamEnthusiast",
        name: "Ice Cream Enthusiast",
        description: "Earn 1,000 lifetime licks.",
        unlocked: false
    },
    {
        id: "iceCreamAddict",
        name: "Ice Cream Addict",
        description: "Earn 1,000,000 lifetime licks.",
        unlocked: false
    },
    {
        id: "smallBusiness",
        name: "Small Business",
        description: "Purchase your first passive upgrade.",
        unlocked: false
    },
    {
        id: "theGreatConeAwakens",
        name: "The Great Cone Awakens",
        description: "Purchase your first click upgrade.",
        unlocked: false
    },
    {
        id: "lickingMachine",
        name: "Licking Machine",
        description: "Reach 100 Licks Per Click.",
        unlocked: false
    },
    {
        id: "industrialDesserts",
        name: "Industrial Desserts",
        description: "Purchase your first Ice Cream Factory.",
        unlocked: false
    },
    {
        id: "globalDomination",
        name: "Global Domination",
        description: "Purchase your first Global Chain.",
        unlocked: false
    },
    {
        id: "spaceProgram",
        name: "Space Program",
        description: "Purchase your first Rocket Program.",
        unlocked: false
    },
    {
        id: "multiversalEntrepreneur",
        name: "Multiversal Entrepreneur",
        description: "Purchase your first Multiversal Delivery.",
        unlocked: false
    },
    {
        id: "creatorOfDessert",
        name: "Creator of Dessert",
        description: "Purchase your first Ice Cream Creator.",
        unlocked: false
    },

    // NEW ACHIEVEMENTS

    {
        id: "clickHappy",
        name: "Click Happy",
        description: "Click the ice cream 100 times.",
        unlocked: false
    },
    {
        id: "professionalClicker",
        name: "Professional Clicker",
        description: "Click the ice cream 1,000 times.",
        unlocked: false
    },
    {
        id: "goldenTouch",
        name: "Golden Touch",
        description: "Click your first Golden Cone.",
        unlocked: false
    },
    {
        id: "coneCollector",
        name: "Cone Collector",
        description: "Click 10 Golden Cones.",
        unlocked: false
    },
    {
        id: "coneHunter",
        name: "Cone Hunter",
        description: "Click 100 Golden Cones.",
        unlocked: false
    },
    {
        id: "underObservation",
        name: "Under Observation",
        description: "Receive a warning from The Great Cone.",
        unlocked: false
    },
    {
        id: "afkManager",
        name: "AFK Manager",
        description: "Earn 100,000 offline licks.",
        unlocked: false
    },
    {
        id: "speedLicker",
        name: "Speed Licker",
        description: "Reach 1,000 LPC.",
        unlocked: false
    },
    {
        id: "industrialScale",
        name: "Industrial Scale",
        description: "Reach 1,000,000 LPS.",
        unlocked: false
    },
    {
        id: "familyBusiness",
        name: "Family Business",
        description: "Own 100 Families.",
        unlocked: false
    },

    {
        id: "completionist",
        name: "Completionist",
        description: "Unlock every achievement.",
        unlocked: false
    },

    // SECRET ACHIEVEMENT

    {
        id: "secretAchievement",
        name: "Forbidden Knowledge",
        description: "The Great Cone has judged you.",
        hidden: true,
        unlocked: false
    }
];

let shopMode = "buy";

let buyAmount = 1;

let affordabilityState = "";

let licks =
    Number(localStorage.getItem("licks")) || 0;

let lifetimeLicks =
    Number(localStorage.getItem("lifetimeLicks")) || 0;
const buy1 =
    document.getElementById(
        "buy1"
    );
const buyMode =
    document.getElementById(
        "buyMode"
    );

const sellMode =
    document.getElementById(
        "sellMode"
    );
const buy10 =
    document.getElementById(
        "buy10"
    );

const buy100 =
    document.getElementById(
        "buy100"
    );

const buyMax =
    document.getElementById(
        "buyMax"
    );
const exportSaveBtn =
    document.getElementById(
        "exportSaveBtn"
    );

const importSaveBtn =
    document.getElementById(
        "importSaveBtn"
    );

const importSaveInput =
    document.getElementById(
        "importSaveInput"
    );

let licksPerClick = 1;

let licksPerSecond = 0;

let baseLicksPerClick = 1;

let clickBonus = 0;

let clickMultiplier = 1;

let goldenConeMultiplier = 1;

let totalClicks =
    Number(
        localStorage.getItem(
            "totalClicks"
        )
    ) || 0;

let goldenConesFound =
    Number(
        localStorage.getItem(
            "goldenConesFound"
        )
    ) || 0;

let greatConeWarnings =
    Number(
        localStorage.getItem(
            "greatConeWarnings"
        )
    ) || 0;

let highestLPC =
    Number(
        localStorage.getItem(
            "highestLPC"
        )
    ) || 0;

let highestLPS =
    Number(
        localStorage.getItem(
            "highestLPS"
        )
    ) || 0;

let offlineLicksEarned =
    Number(
        localStorage.getItem(
            "offlineLicksEarned"
        )
    ) || 0;

const achievementPanel =
    document.getElementById(
        "achievementPanel"
    );

const achievementToggle =
    document.getElementById(
        "achievementToggle"
    );

achievementToggle.onclick =
    () => {

        achievementPanel
            .classList
            .toggle("open");

    };
const statsPanel =
    document.getElementById(
        "statsPanel"
    );

const statsToggle =
    document.getElementById(
        "statsToggle"
    );

statsToggle.onclick =
    () => {

        statsPanel.classList.toggle(
            "open"
        );

    };
const licksDisplay =
    document.getElementById("licks");

const lifetimeDisplay =
    document.getElementById("lifetimeLicks");

const lpcDisplay =
    document.getElementById("lpc");

const lpsDisplay =
    document.getElementById("lps");

const iceCreamButton =
    document.getElementById("iceCreamButton");

const resetBtn =
    document.getElementById("resetBtn");

const fadeScreen =
    document.getElementById("fadeScreen");
function checkAchievements() {

    // First Lick
    if (lifetimeLicks >= 1) {

        unlockAchievement(
            "firstLick"
        );

    }

    // Ice Cream Enthusiast
    if (lifetimeLicks >= 1000) {

        unlockAchievement(
            "iceCreamEnthusiast"
        );

    }

    // Ice Cream Addict
    if (lifetimeLicks >= 1000000) {

        unlockAchievement(
            "iceCreamAddict"
        );

    }

    // Small Business
    if (
        upgrades.some(
            upgrade =>
                upgrade.owned > 0
        )
    ) {

        unlockAchievement(
            "smallBusiness"
        );

    }

    // The Great Cone Awakens
    if (
        clickUpgrades.some(
            upgrade =>
                upgrade.purchased
        )
    ) {

        unlockAchievement(
            "theGreatConeAwakens"
        );

    }

    // Licking Machine
    if (licksPerClick >= 100) {

        unlockAchievement(
            "lickingMachine"
        );

    }

    // Industrial Desserts
    if (
        upgrades.find(
            upgrade =>
                upgrade.id === "factory"
        )?.owned > 0
    ) {

        unlockAchievement(
            "industrialDesserts"
        );

    }

    // Global Domination
    if (
        upgrades.find(
            upgrade =>
                upgrade.id === "globalChain"
        )?.owned > 0
    ) {

        unlockAchievement(
            "globalDomination"
        );

    }

    // Space Program
    if (
        upgrades.find(
            upgrade =>
                upgrade.id === "rocket"
        )?.owned > 0
    ) {

        unlockAchievement(
            "spaceProgram"
        );

    }

    // Multiversal Entrepreneur
    if (
        upgrades.find(
            upgrade =>
                upgrade.id === "multiversalDelivery"
        )?.owned > 0
    ) {

        unlockAchievement(
            "multiversalEntrepreneur"
        );

    }

    // Creator Of Dessert
    if (
        upgrades.find(
            upgrade =>
                upgrade.id === "iceCreamGod"
        )?.owned > 0
    ) {

        unlockAchievement(
            "creatorOfDessert"
        );

    }
    if (totalClicks >= 100) {
    unlockAchievement(
        "clickHappy"
    );
}

if (totalClicks >= 1000) {
    unlockAchievement(
        "professionalClicker"
    );
}

if (goldenConesFound >= 1) {
    unlockAchievement(
        "goldenTouch"
    );
}

if (goldenConesFound >= 10) {
    unlockAchievement(
        "coneCollector"
    );
}

if (goldenConesFound >= 100) {
    unlockAchievement(
        "coneHunter"
    );
}

if (greatConeWarnings >= 1) {
    unlockAchievement(
        "underObservation"
    );
}

if (offlineLicksEarned >= 100000) {
    unlockAchievement(
        "afkManager"
    );
}

if (highestLPC >= 1000) {
    unlockAchievement(
        "speedLicker"
    );
}

if (highestLPS >= 1000000) {
    unlockAchievement(
        "industrialScale"
    );
}

if (
    upgrades.find(
        upgrade =>
            upgrade.id === "family"
    )?.owned >= 100
) {
    unlockAchievement(
        "familyBusiness"
    );
}
        if (
        achievements
            .filter(
                achievement =>
                    achievement.id !== "completionist" &&
                    !achievement.hidden
            )
            .every(
                achievement =>
                    achievement.unlocked
            )
    ) {

        unlockAchievement(
            "completionist"
        );

    }
    const impossibleProgress =
    licks > 1e100 ||
    lifetimeLicks > 1e100 ||
    upgrades.some(
        upgrade =>
            upgrade.owned > 100000000000000000000000000000000
    );

if (impossibleProgress) {

    const achievement =
        achievements.find(
            achievement =>
                achievement.id ===
                "secretAchievement"
        );

    if (
        !achievement.unlocked
    ) {

        unlockAchievement(
            "secretAchievement"
        );

        setTimeout(
            () => {

                showGreatConeJudgement();

            },
            5000
        );

    }

}
}
function saveStatistics() {

    localStorage.setItem(
        "totalClicks",
        totalClicks
    );

    localStorage.setItem(
        "goldenConesFound",
        goldenConesFound
    );

    localStorage.setItem(
        "greatConeWarnings",
        greatConeWarnings
    );

    localStorage.setItem(
        "highestLPC",
        highestLPC
    );

    localStorage.setItem(
        "highestLPS",
        highestLPS
    );

    localStorage.setItem(
        "offlineLicksEarned",
        offlineLicksEarned
    );


}
function updateStats() {
    const mostOwnedUpgrade =
        upgrades.reduce(

            (highest, current) =>

                current.owned >
                highest.owned

                    ? current

                    : highest

        );

    highestLPC =
        Math.max(
            highestLPC,
            licksPerClick
        );

    highestLPS =
        Math.max(
            highestLPS,
            licksPerSecond
        );

    document.getElementById(
        "statLifetimeLicks"
    ).textContent =
        formatNumber(
            lifetimeLicks
        );

    document.getElementById(
        "statTotalClicks"
    ).textContent =
        formatNumber(
            totalClicks
        );

    document.getElementById(
        "statGoldenCones"
    ).textContent =
        formatNumber(
            goldenConesFound
        );

    document.getElementById(
        "statGreatConeWarnings"
    ).textContent =
        formatNumber(
            greatConeWarnings
        );

    document.getElementById(
        "statHighestLPC"
    ).textContent =
        formatNumber(
            highestLPC
        );

    document.getElementById(
        "statHighestLPS"
    ).textContent =
        formatNumber(
            highestLPS
        );
        document.getElementById(
    "statOfflineLicks"
).textContent =
    formatNumber(
        offlineLicksEarned
    );


document.getElementById(
    "statMostOwnedUpgrade"
).textContent =
    mostOwnedUpgrade.owned > 0

        ? `${mostOwnedUpgrade.name}
           (${formatNumber(
                mostOwnedUpgrade.owned
            )})`

        : "None";
    
    saveStatistics();
}
function exportSave() {

    const saveData = {
    version: 1,

    licks: licks,

    lifetimeLicks: lifetimeLicks,

    upgrades: {},

    clickUpgrades: {},

    achievements: {},

    stats: {

    totalClicks:
        totalClicks,

    goldenConesFound:
        goldenConesFound,

    greatConeWarnings:
        greatConeWarnings,

    highestLPC:
        highestLPC,

    highestLPS:
        highestLPS,

    offlineLicksEarned:
        offlineLicksEarned

}
};
    

    clickUpgrades.forEach(
        upgrade => {

            saveData.clickUpgrades[
                upgrade.id
            ] =
                upgrade.purchased;

        }
    );
    achievements.forEach(
    achievement => {

        saveData.achievements[
            achievement.id
        ] = achievement.unlocked;

    }
);
    upgrades.forEach(
        upgrade => {

            saveData.upgrades[
                upgrade.id
            ] = upgrade.owned;

        }
    );

    const blob =
        new Blob(

            [
                JSON.stringify(
                    saveData,
                    null,
                    4
                )
            ],

            {
                type:
                    "application/json"
            }

        );

    const url =
        URL.createObjectURL(
            blob
        );

    const link =
        document.createElement(
            "a"
        );

    link.href =
        url;

    link.download =
        "IceCreamLickerSave.json";

    link.click();

    URL.revokeObjectURL(
        url
    );

}
function renderAchievements() {

    const achievementList =
        document.getElementById(
            "achievementList"
        );

    achievementList.innerHTML = "";

    achievements.forEach( 
        achievement => {
            if (
                achievement.hidden &&
                !achievement.unlocked
            ) {
                return;
            }
            const card =
                document.createElement(
                    "div"
                );
            card.classList.add(
                "achievement"
            );
            if (
                    achievement.unlocked
                ) {

                    card.classList.add(
                        "achievement-unlocked"
                    );

                }
                else {

                    card.classList.add(
                        "achievement-locked"
                    );

                }

            card.innerHTML = `
                <h3>
                    ${achievement.name}
                </h3>

                <p>
                    ${achievement.description}
                </p>

                <p>
                    ${
                        achievement.unlocked
                            ? "Unlocked"
                            : "Locked"
                    }
                </p>
            `;

            achievementList.appendChild(
                card
            );

        }
    );

}
function importSave(
    saveData
) {

    if (
        saveData.version !== 1
    ) {

        Alert(
            "Unsupported save version.",
            "Import Failed"
        );

        return;

    }

    licks =
        saveData.licks || 0;

    lifetimeLicks =
        saveData.lifetimeLicks || 0;
    clickUpgrades.forEach(
        upgrade => {

            upgrade.purchased =
                saveData
                    .clickUpgrades?.[
                        upgrade.id
                    ] || false;

        }
    );
    achievements.forEach(
        achievement => {

            achievement.unlocked =
                saveData
                    .achievements?.[
                        achievement.id
                    ] || false;

        }
    );

    upgrades.forEach(
        upgrade => {

            upgrade.owned =
                saveData.upgrades?.[
                    upgrade.id
                ] || 0;

        }
    );
    totalClicks =
        saveData.stats
            ?.totalClicks
        || 0;

    goldenConesFound =
        saveData.stats
            ?.goldenConesFound
        || 0;

    greatConeWarnings =
        saveData.stats
            ?.greatConeWarnings
        || 0;

    highestLPC =
        saveData.stats
            ?.highestLPC
        || 0;

    highestLPS =
        saveData.stats
            ?.highestLPS
        || 0;

    offlineLicksEarned =
        saveData.stats
            ?.offlineLicksEarned
        || 0;
    saveGame();

    saveClickUpgrades();

    saveUpgrades();

    rebuildClickStats();

    updateDisplay();

    renderShop();

    renderClickShop();

    renderAchievements();

    Alert(
        "Save imported successfully!",
        "Import Complete"
    );

}
importSaveInput.addEventListener(
    "change",
    event => {

        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload =
            e => {

                try {

                    const saveData =
                        JSON.parse(
                            e.target.result
                        );

                    Confirm(

                    "📂 Import Save",

                    "This will overwrite your current ice cream empire. Continue?",

                    () => {

                        importSave(
                            saveData
                        );

                    },

                    "Import Save",

                    "Cancel"

);

                }
                catch {

                    Alert(
                        "Invalid save file.",
                        "Import Failed"
                    );

                }

            };

        reader.readAsText(
            file
        );

    }
);
function saveAchievements() {

    achievements.forEach(
        achievement => {

            localStorage.setItem(
                achievement.id + "Unlocked",
                achievement.unlocked
            );

        }
    );

}
function loadAchievements() {

    achievements.forEach(
        achievement => {

            achievement.unlocked =
                localStorage.getItem(
                    achievement.id + "Unlocked"
                ) === "true";

        }
    );

}
function saveClickUpgrades() {

    clickUpgrades.forEach(
        upgrade => {

            localStorage.setItem(
                upgrade.id + "Purchased",
                upgrade.purchased
            );

        }
    );

}
function rebuildClickStats() {

    clickBonus = 0;
    clickMultiplier = 1;

    clickUpgrades.forEach(
        upgrade => {

            if (!upgrade.purchased) {
                return;
            }

            if (
                upgrade.type ===
                "additive"
            ) {

                clickBonus +=
                    upgrade.bonus;

            }
            else {

                clickMultiplier *=
                    upgrade.bonus;

            }

        }
    );

}
function loadClickUpgrades() {

    clickUpgrades.forEach(
        upgrade => {

            upgrade.purchased =
                localStorage.getItem(
                    upgrade.id +
                    "Purchased"
                ) === "true";

        }
    );

    rebuildClickStats();

}
function unleashTheGreatCone() {

    unlockAchievement(
        "secretAchievement"
    );

    setTimeout(
        () => {

            showGreatConeJudgement();

        },
        5000
    );

}
function showGreatConeJudgement() {

    localStorage.setItem(
        "greatConeJudgement",
        "true"
    );

    const overlay =
        document.createElement(
            "div"
        );

    overlay.id =
        "greatConeJudgement";

    document.body.appendChild(
        overlay
    );

    for (
        let i = 0;
        i < 1000;
        i++
    ) {

        const cone =
            document.createElement(
                "img"
            );

        cone.src =
            "Assets/icecream.png";

        cone.style.width =
        "100vh";

        cone.style.height =
            "100vh";

        overlay.appendChild(
            cone
        );

    }

}
function spawnGoldenCone() {

    const cone =
        document.createElement(
            "img"
        );

    cone.src =
        "Assets/icecream.png";

    cone.classList.add(
        "golden-cone"
    );

    cone.style.left =
        Math.random() *
        (window.innerWidth - 120)
        + "px";

    cone.style.top =
        Math.random() *
        (window.innerHeight - 120)
        + "px";

   cone.onclick =
    function () {
        goldenConesFound++;
        const roll =
            Math.random();

        // 1%
        if (roll < 0.01) {

            Alert(
                "The Great Cone is watching you.",
                "👑 Great Cone"
            );
            greatConeWarnings++;

        }

        // 19%
        else if (roll < 0.20) {

            const reward =
                Math.floor(

                    (
                        calculateLPS() *
                        (
                            Math.random() * 300 +
                            60
                        )
                    )

                    +

                    (
                        calculateLPC() *
                        (
                            Math.random() * 2000 +
                            500
                        )
                    )

                );

            licks += reward;
            lifetimeLicks += reward;

            Alert(
                `Golden bonus! ${formatNumber(reward)} licks gained.`,
                "✨ Golden Cone"
            );

        }

        // 80%
        else {

            goldenConeMultiplier =
                10;

            Alert(
                "✨ Production multiplied by 10 for 1 minute!",
                "Golden Cone Blessing"
            );

            setTimeout(

                () => {

                    goldenConeMultiplier =
                        1;

                    Alert(
                        "The Golden Cone's blessing has faded.",
                        "✨ Golden Cone"
                    );

                },

                60000

            );

        }

        updateDisplay();

        saveGame();

        cone.remove();

    };

    document.body.appendChild(
        cone
    );

    setTimeout(
        () => {

            if (
                cone.parentElement
            ) {

                cone.remove();

            }

        },
        15000
    );

}
function setBuyMode(mode) {

    buyAmount = mode;

    buy1.classList.remove(
        "mode-active"
    );

    buy10.classList.remove(
        "mode-active"
    );

    buy100.classList.remove(
        "mode-active"
    );

    buyMax.classList.remove(
        "mode-active"
    );

    if (mode === 1) {

        buy1.classList.add(
            "mode-active"
        );

    }

    if (mode === 10) {

        buy10.classList.add(
            "mode-active"
        );

    }

    if (mode === 100) {

        buy100.classList.add(
            "mode-active"
        );

    }

    if (mode === "max") {

        buyMax.classList.add(
            "mode-active"
        );

    }

}
function showFloatingLick(
    amount,
    x,
    y
) {

    const popup =
        document.createElement("div");

    popup.className =
        "floating-lick";

    popup.textContent =
        "+" + formatNumber(amount);

    popup.style.left =
        x + "px";

    popup.style.top =
        y + "px";

    document.body.appendChild(
        popup
    );

    setTimeout(() => {

        popup.remove();

    }, 1000);

}
buy1.onclick = () => {

    setBuyMode(1);

};

buy10.onclick = () => {

    setBuyMode(10);

};

buy100.onclick = () => {

    setBuyMode(100);

};

buyMax.onclick = () => {

    setBuyMode("max");

};
function buyUpgrade(id) {

    const upgrade =
        upgrades.find(
            item =>
                item.id === id
        );

    if (!upgrade) {
        return;
    }

    const cost =
        getUpgradeCost(
            upgrade
        );

    if (licks < cost) {

        Alert(
            "You need more licks.",
            "Not Enough Licks"
        );

        return;

    }

    if (
    buyAmount === "max"
) {

    while (
        licks >=
        getUpgradeCost(
            upgrade
        )
    ) {

        licks -=
            getUpgradeCost(
                upgrade
            );

        upgrade.owned++;

    }

}
else {

    for (
        let i = 0;
        i < buyAmount;
        i++
    ) {

        const cost =
            getUpgradeCost(
                upgrade
            );

        if (
            licks < cost
        ) {
            break;
        }

        licks -= cost;

        upgrade.owned++;

    }

}

updateDisplay();

saveGame();

saveUpgrades();

renderShop();

}
function setShopMode(mode) {

    shopMode = mode;

    buyMode.classList.remove(
        "mode-active"
    );

    sellMode.classList.remove(
        "mode-active"
    );

    if (mode === "buy") {

        buyMode.classList.add(
            "mode-active"
        );

    } else {

        sellMode.classList.add(
            "mode-active"
        );

    }
    renderShop();

}
buyMode.onclick = () => {

    setShopMode("buy");

};

sellMode.onclick = () => {

    setShopMode("sell");

};
function sellUpgrade(id) {

    const upgrade =
        upgrades.find(
            item =>
                item.id === id
        );

    if (!upgrade) {
        return;
    }

    if (buyAmount === "max") {

        while (
            upgrade.owned > 0
        ) {

            const refund =
                Math.floor(
                    getUpgradeCost({
                        ...upgrade,
                        owned:
                            upgrade.owned - 1
                    }) * 0.75
                );

            licks += refund;

            upgrade.owned--;

        }

    } else {

        for (
            let i = 0;
            i < buyAmount;
            i++
        ) {

            if (
                upgrade.owned <= 0
            ) {
                break;
            }

            const refund =
                Math.floor(
                    getUpgradeCost({
                        ...upgrade,
                        owned:
                            upgrade.owned - 1
                    }) * 0.75
                );

            licks += refund;

            upgrade.owned--;

        }

    }

    updateDisplay();

    saveGame();

    saveUpgrades();

    renderShop();

}
function renderShop() {

    const shop =
        document.getElementById(
            "shop"
        );
        
    shop.innerHTML = "";

    upgrades.forEach(
        upgrade => {

            const cost =
                getUpgradeCost(
                    upgrade
                );

           const card =
                document.createElement(
                    "div"
                );

            card.className =
                "upgrade";

            if (
                licks >= cost
            ) {

                card.classList.add(
                    "upgrade-affordable"
                );

            }
            const bonus =
                1 +
                (
                    upgrade.owned *
                    0.005
                );

            const totalProduction =
                upgrade.owned *
                upgrade.lps *
                bonus;
                const revealCost =
                    upgrade.baseCost * 0.8;

                if (
                    !upgrade.discovered &&
                    licks >= revealCost
                ) {

                    upgrade.discovered = true;

                }
            const buttonLabel =
            shopMode === "buy"
                ? "Buy"
                : "Sell";
                const refund =
                    upgrade.owned > 0
                        ? Math.floor(
                            getUpgradeCost({
                                ...upgrade,
                                owned:
                                    upgrade.owned - 1
                            }) * 0.75
                        )
                        : 0;
                        const costLabel =
                        shopMode === "buy"
                            ? `Cost:
                            ${formatNumber(cost)}`
                            : `Refund:
                            ${formatNumber(refund)}`;
                            const buttonClass =
                    shopMode === "buy"
                        ? "buy-button"
                        : "sell-button";
            card.innerHTML = `

                <img
                    src="${upgrade.image}"
                    alt="${upgrade.name}">

                <h3>
                    ${
                        upgrade.discovered
                            ? upgrade.name
                            : "Unknown Upgrade"
                    }
                </h3>

                <p>
                    ${
                        upgrade.discovered
                            ? upgrade.description
                            : "Keep growing your franchise to reveal this upgrade."
                    }
                </p>

                <p>
                    ${costLabel}
                </p>

                <p>
                    Owned:
                    ${formatNumber(
                        upgrade.owned
                    )}
                </p>

                <p>
                    Production:
                    ${formatNumber(
                        upgrade.lps
                    )}
                    LPS each
                </p>

                <p>
                    Total:
                    ${formatNumber(
                        totalProduction
                    )}
                    LPS
                </p>

                <button
                    class="${buttonClass}"
                    data-id="${upgrade.id}">
                    ${buttonLabel}
                </button>

            `;

            shop.appendChild(
                card
            );

        }
    );

    document
        .querySelectorAll(
            "#shop .upgrade button"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    if (
                        shopMode === "buy"
                    ) {

                        buyUpgrade(
                            button.dataset.id
                        );

                    } else {

                        sellUpgrade(
                            button.dataset.id
                        );

                    }

                };

        });

}
function buyClickUpgrade(id) {

    const upgrade =
        clickUpgrades.find(
            item =>
                item.id === id
        );

    if (
        !upgrade ||
        upgrade.purchased
    ) {
        return;
    }

    if (
        licks < upgrade.cost
    ) {

        Alert(
            "You need more licks.",
            "Not Enough Licks"
        );

        return;

    }

    licks -= upgrade.cost;

    upgrade.purchased = true;
    saveClickUpgrades();
    if (
        upgrade.type ===
        "additive"
    ) {

        clickBonus +=
            upgrade.bonus;
    }
    else {

        clickMultiplier *=
            upgrade.bonus;

    }

    updateDisplay();

    saveGame();

    renderClickShop();
    
}
function renderClickShop() {

    const clickShop =
        document.getElementById(
            "clickShop"
        );

    clickShop.innerHTML = "";

    clickUpgrades.forEach(
        upgrade => {
            const revealCost =
                upgrade.cost * 0.8;

            if (
                !upgrade.discovered ||
                licks >= revealCost
            ) {

                upgrade.discovered = true;

            }
            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "upgrade click-upgrade";

            if (
                upgrade.purchased
            ) {

                card.classList.add(
                    "click-upgrade-owned"
                );

            }

            const effectText =
                upgrade.type === "additive"
                    ? `+${upgrade.bonus} LPC`
                    : `x${upgrade.bonus} LPC`;

            card.innerHTML = `

                <h3>
                    ${
                        upgrade.discovered
                            ? upgrade.name
                            : "Unknown Upgrade"
                    }
                </h3>

                <p>
                    Cost:
                    ${formatNumber(
                        upgrade.cost
                    )}
                </p>

                <p>
                    Effect:
                    ${effectText}
                </p>

                <button
                    data-id="${
                        upgrade.id
                    }"
                    ${
                        upgrade.purchased
                            ? "disabled"
                            : ""
                    }>
                    ${
                        upgrade.purchased
                            ? "Owned"
                            : "Purchase"
                    }
                </button>

            `;

            clickShop.appendChild(
                card
            );

        }
    );
document
    .querySelectorAll(
        "#clickShop button"
    )
    .forEach(button => {

        button.onclick =
            () => {

                buyClickUpgrade(
                    button.dataset.id
                );

            };

    });
}
function formatNumber(num) {

    if (num >= 1e12) {
        return (
            num / 1e12
        ).toFixed(1) + " Tri";
    }

    if (num >= 1e9) {
        return (
            num / 1e9
        ).toFixed(1) + " Bil";
    }

    if (num >= 1e6) {
        return (
            num / 1e6
        ).toFixed(1) + " Mil";
    }

    if (num < 1 && num > 0) {
        return num.toFixed(1);
    }

    if (
        Number.isInteger(num)
    ) {
        return num.toLocaleString();
    }

    return num.toFixed(1);

}
function unlockAchievement(id) {

    const achievement =
        achievements.find(
            achievement =>
                achievement.id === id
        );

    if (
        !achievement ||
        achievement.unlocked
    ) {
        return;
    }

    achievement.unlocked = true;
    saveAchievements();

    Alert(
        achievement.description,
        `🏆 ${achievement.name}`
    );

    renderAchievements();

}
function updateShopAffordability() {

    const newState =
        upgrades
            .map(
                upgrade =>
                    licks >=
                    getUpgradeCost(
                        upgrade
                    )
            )
            .join(",");

    if (
        newState !==
        affordabilityState
    ) {

        affordabilityState =
            newState;

        renderShop();

    }

}
function getUpgradeCost(
    upgrade
) {

    return Math.floor(
        upgrade.baseCost *
        Math.pow(
            1.15,
            upgrade.owned
        )
    );

}

function saveUpgrades() {

    upgrades.forEach(
        upgrade => {

            localStorage.setItem(
                upgrade.id + "Owned",
                upgrade.owned
            );

        }
    );

}
function calculateLPC() {

    return (
        baseLicksPerClick +
        clickBonus
    )
    * clickMultiplier
    * goldenConeMultiplier;

}
function calculateLPS() {

    let total = 0;

    upgrades.forEach(
        upgrade => {

            const bonus =
                1 +
                (
                    upgrade.owned *
                    0.005
                );

            total +=
                upgrade.owned *
                upgrade.lps *
                bonus;

        }
    );

    return total * goldenConeMultiplier;

}
// =====================
// DISPLAY
// =====================
function updateDisplay() {
    licksPerClick =
    calculateLPC();
    licksPerSecond =
        calculateLPS();

    licksDisplay.textContent =
        formatNumber(licks);

    lifetimeDisplay.textContent =
        formatNumber(lifetimeLicks);

    lpcDisplay.textContent =
        formatNumber(licksPerClick);

    lpsDisplay.textContent =
        formatNumber(licksPerSecond);

    checkAchievements();
    updateStats();
}
// =====================
// SAVE
// =====================

function saveGame() {

    localStorage.setItem(
        "licks",
        licks
    );

    localStorage.setItem(
        "lifetimeLicks",
        lifetimeLicks
    );
    localStorage.setItem(
    "lastPlayed",
    Date.now()
);
}
function formatOfflineTime(
    seconds
) {

    const days =
        Math.floor(
            seconds / 86400
        );

    seconds %= 86400;

    const hours =
        Math.floor(
            seconds / 3600
        );

    seconds %= 3600;

    const minutes =
        Math.floor(
            seconds / 60
        );

    const parts = [];

    if (days > 0) {

        parts.push(
            `${days} day${
                days !== 1
                    ? "s"
                    : ""
            }`
        );

    }

    if (hours > 0) {

        parts.push(
            `${hours} hour${
                hours !== 1
                    ? "s"
                    : ""
            }`
        );

    }

    if (minutes > 0) {

        parts.push(
            `${minutes} minute${
                minutes !== 1
                    ? "s"
                    : ""
            }`
        );

    }

    if (
        parts.length === 0
    ) {

        return "less than a minute";

    }

    return parts.join(
        ", "
    );

}
function applyOfflineEarnings() {

    const lastPlayed =
        Number(
            localStorage.getItem(
                "lastPlayed"
            )
        );

    if (!lastPlayed) {
        return;
    }

    const now =
        Date.now();

    let offlineSeconds =
        (now - lastPlayed)
        / 1000;

    const maxOfflineSeconds =
        24 * 60 * 60;

    offlineSeconds =
        Math.min(
            offlineSeconds,
            maxOfflineSeconds
        );

    const offlineLicks =
        calculateLPS() *
        offlineSeconds;

    if (
        offlineLicks <= 0
    ) {
        return;
    }

    licks += offlineLicks;

    offlineLicksEarned +=
        offlineLicks;

    lifetimeLicks +=
        offlineLicks;

    updateDisplay();

    Alert(

            `You were away for:

        ${formatOfflineTime(
            offlineSeconds
        )}

        Your franchise generated:

        ${formatNumber(
            offlineLicks
        )} licks.`,

            "🍦 Welcome Back"

        );

}
// =====================
// NEW FRANCHISE MESSAGE
// =====================

function showNewFranchiseMessage() {

    Alert(
        "Welcome to your new ice cream franchise! Click the ice cream to earn licks and begin building your empire.",
        "🍦 New Franchise"
    );

}

// =====================
// HAND OVER THE KEYS
// =====================

function handOverKeys() {

    iceCreamButton.classList.add(
        "fall-off"
    );
    statsPanel.classList.remove(
        "open"
    );
    setTimeout(() => {

        fadeScreen.style.opacity = "1";

    }, 1500);

    setTimeout(() => {

        localStorage.removeItem("licks");
        localStorage.removeItem("lifetimeLicks");
        achievements.forEach(
            achievement => {

                achievement.unlocked = false;

                localStorage.removeItem(
                    achievement.id + "Unlocked"
                );

            }
        );

renderAchievements();
        clickUpgrades.forEach(
            upgrade => {

                upgrade.purchased = false;

                localStorage.removeItem(
                    upgrade.id + "Purchased"
                );

            }
        );

        clickBonus = 0;
        clickMultiplier = 1;

        saveClickUpgrades();
        rebuildClickStats();
        renderClickShop();
        upgrades.forEach(
            upgrade => {

                upgrade.owned = 0;

                localStorage.removeItem(
                    upgrade.id + "Owned"
                );

            }
);
        licks = 0;
        lifetimeLicks = 0;
        totalClicks = 0;

        goldenConesFound = 0;

        greatConeWarnings = 0;

        highestLPC = 0;

        highestLPS = 0;

        offlineLicksEarned = 0;

        updateDisplay();
        localStorage.removeItem(
            "totalClicks"
        );

        localStorage.removeItem(
            "goldenConesFound"
        );

        localStorage.removeItem(
            "greatConeWarnings"
        );

        localStorage.removeItem(
            "highestLPC"
        );

        localStorage.removeItem(
            "highestLPS"
        );

        localStorage.removeItem(
            "offlineLicksEarned"
        );

    }, 3000);

    setTimeout(() => {

        fadeScreen.style.opacity = "0";

        iceCreamButton.classList.remove(
            "fall-off"
        );

    }, 5000);

    setTimeout(() => {

        showNewFranchiseMessage();

    }, 5500);

}

// =====================
// CLICK ICE CREAM
// =====================

iceCreamButton.addEventListener(
    "click",
    (event) => {

        licks += licksPerClick;
        lifetimeLicks += licksPerClick;
        totalClicks++;

        updateDisplay();
        saveGame();

        showFloatingLick(
            licksPerClick,
            event.clientX,
            event.clientY
        );

        iceCreamButton.classList.add(
            "wiggle"
        );

        setTimeout(() => {

            iceCreamButton.classList.remove(
                "wiggle"
            );

        }, 250);

    }
);

// =====================
// HAND OVER THE KEYS
// =====================

resetBtn.addEventListener(
    "click",
    () => {

        Confirm(
            "🔑 Hand Over the Keys",
            "Transfer your ice cream business to a new owner and start over?",
            handOverKeys,
            "Hand Over Keys",
            "Keep Business"
        );

    }
);

// =====================
// STARTUP
// =====================

setInterval(() => {

    saveGame();

}, 5000);
loadAchievements();
loadClickUpgrades();
updateDisplay();
renderShop();
renderClickShop();
renderAchievements();
// Only show welcome popup if no save exists

if (
    !localStorage.getItem("licks") &&
    !localStorage.getItem("lifetimeLicks")
) {

    showNewFranchiseMessage();

}
let lastFrameTime =
    performance.now();

function gameLoop(timestamp) {

    const deltaTime =
        (timestamp -
        lastFrameTime)
        / 1000;

    lastFrameTime =
        timestamp;

    licksPerSecond =
        calculateLPS();

    licks +=
        licksPerSecond *
        deltaTime;

    lifetimeLicks +=
        licksPerSecond *
        deltaTime;

    updateDisplay();

    updateShopAffordability();
    requestAnimationFrame(
        gameLoop
    );

}

requestAnimationFrame(
    gameLoop
);
setBuyMode(1);
setShopMode("buy");
exportSaveBtn.onclick = exportSave;
importSaveBtn.onclick =
() => {

        importSaveInput.click();

    };
if (
    localStorage.getItem(
        "greatConeJudgement"
    ) === "true"
) {

    showGreatConeJudgement();

}
setInterval(
    () => {

        if (
            Math.random() <
            0.25
        ) {

            spawnGoldenCone();

        }

    },
    60000
);
applyOfflineEarnings();
// ==========================================
// DEVELOPMENT ONLY
// EMERGENCY GREAT CONE RECOVERY
// REMOVE BEFORE RELEASE
// ==========================================

window.ForgiveMeGreatCone =
    function () {

        localStorage.removeItem(
            "greatConeJudgement"
        );

        location.reload();

    };

window.summonTheCone =
    function () {

        const achievement =
            achievements.find(
                achievement =>
                    achievement.id ===
                    "secretAchievement"
            );

        achievement.unlocked =
            false;

        saveAchievements();

        unlockAchievement(
            "secretAchievement"
        );

        setTimeout(
            () => {

                showGreatConeJudgement();

            },
            5000
        );

    };
// ==========================================