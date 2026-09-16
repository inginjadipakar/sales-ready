import {
  normalizeWhatsApp,
  step1Schema,
  step2Schema,
  step3Schema,
  registrationSubmissionSchema,
} from "../src/lib/validation";

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`FAIL: ${message}`);
  }
  console.log(`PASS: ${message}`);
}

console.log("\n=== 1. Testing WhatsApp Normalization ===");
assert(normalizeWhatsApp("08123456789") === "628123456789", "08123456789 -> 628123456789");
assert(normalizeWhatsApp("+628123456789") === "628123456789", "+628123456789 -> 628123456789");
assert(normalizeWhatsApp("0812-3456-7890") === "6281234567890", "0812-3456-7890 -> 6281234567890");
assert(normalizeWhatsApp("628123456789") === "628123456789", "628123456789 stays 628123456789");
assert(normalizeWhatsApp("8123456789") === "628123456789", "8123456789 -> 628123456789");
assert(normalizeWhatsApp("+62 812 3456 7890") === "6281234567890", "spaced +62 812... -> 6281234567890");
assert(normalizeWhatsApp("+62 0812-3456-7890") === "6281234567890", "+62 08... prefix -> 6281234567890");
assert(normalizeWhatsApp("081812345") === "6281812345", "9-digit local 081812345 -> 6281812345");

console.log("\n=== 2. Testing Step 1 Schema Validation ===");
// Invalid phone
const badPhone = step1Schema.safeParse({
  name: "Budi Santoso",
  whatsapp: "12345",
  domicile: "Jakarta",
});
assert(!badPhone.success, "Invalid short phone is rejected");

// Empty name
const emptyName = step1Schema.safeParse({
  name: " ",
  whatsapp: "081234567890",
  domicile: "Jakarta",
});
assert(!emptyName.success, "Empty/whitespace name is rejected");

// Empty domicile
const emptyDomicile = step1Schema.safeParse({
  name: "Budi Santoso",
  whatsapp: "081234567890",
  domicile: "",
});
assert(!emptyDomicile.success, "Empty domicile is rejected");

// Valid step 1 data
const validStep1 = step1Schema.safeParse({
  name: "Budi Santoso",
  whatsapp: "081234567890",
  domicile: "Jakarta Selatan",
  email: "budi@example.com",
});
assert(validStep1.success, "Valid Step 1 data is accepted");

console.log("\n=== 3. Testing Step 2 Schema Validation ===");
const emptyStep2 = step2Schema.safeParse({
  participantType: "",
  salesExperience: "",
});
assert(!emptyStep2.success, "Empty Step 2 is rejected");

const validStep2 = step2Schema.safeParse({
  participantType: "Fresh Graduate",
  salesExperience: "Belum pernah",
});
assert(validStep2.success, "Valid Step 2 data is accepted");

console.log("\n=== 4. Testing Step 3 Schema Validation ===");
const emptyGoals = step3Schema.safeParse({
  goals: [],
  question: "Bagaimana cara mulai?",
});
assert(!emptyGoals.success, "Empty goals array is rejected");

const questionTooLong = step3Schema.safeParse({
  goals: ["Memahami dasar sales"],
  question: "a".repeat(501),
});
assert(!questionTooLong.success, "Question > 500 characters is rejected");

const validStep3 = step3Schema.safeParse({
  goals: ["Memahami dasar sales"],
  question: "Bagaimana cara memulai karier di bidang sales?",
});
assert(validStep3.success, "Valid Step 3 data is accepted");

console.log("\n=== 5. Testing Server Submission Schema & Honeypot ===");
const botSubmission = registrationSubmissionSchema.safeParse({
  name: "Spam Bot",
  whatsapp: "081234567890",
  domicile: "Jakarta",
  participantType: "Mahasiswa",
  salesExperience: "Belum pernah",
  goals: ["Memahami dasar sales"],
  hp_website: "https://spam.com",
});
assert(!botSubmission.success, "Bot submission with hp_website is rejected");

const legitimateSubmission = registrationSubmissionSchema.safeParse({
  name: "Dadan Satria",
  whatsapp: "081298765432",
  domicile: "Sidoarjo",
  participantType: "Wirausaha / UMKM",
  salesExperience: "Pernah praktik",
  goals: ["Meningkatkan kemampuan penjualan", "Belajar dari pengalaman praktisi"],
  question: "Bagaimana cara memulai karier di bidang sales?",
  hp_website: "",
});
assert(legitimateSubmission.success, "Legitimate complete submission is accepted");

console.log("\n>>> ALL VALIDATION & NORMALIZATION TESTS PASSED! <<<\n");
