// 🚆 Train Data
export const trains = [
  {
    train_id: "Port001",
    current_status: "Revenue",
    mileage_km: 12500,
    branding_contract: "Contract A"
  },
  {
    train_id: "Port002",
    current_status: "Idle",
    mileage_km: 9800,
    branding_contract: "Contract B"
  },
  {
    train_id: "Port003",
    current_status: "Under Maintenance",
    mileage_km: 14300,
    branding_contract: "Contract C"
  }
];

// 🧰 Spare Part Usage
export const spareParts = [
  {
    part_name: "BrakePad",
    train_id: "Port001",
    usage_date: "2025-09-12",
    quantity: 2
  },
  {
    part_name: "Sensor",
    train_id: "Port002",
    usage_date: "2025-09-20",
    quantity: 1
  }
];

// 🛠️ Maintenance Logs
export const maintenanceLogs = [
  {
    train_id: "Port001",
    job_card_status: "Closed",
    last_service_date: "2025-08-15",
    next_due_date: "2025-10-15"
  },
  {
    train_id: "Port003",
    job_card_status: "In Progress",
    last_service_date: "2025-09-01",
    next_due_date: "2025-11-01"
  }
];

// 🧼 Cleaning Status
export const cleaningStatus = [
  {
    train_id: "Port001",
    cleaning_needed: "No",
    last_cleaned: "2025-10-01"
  },
  {
    train_id: "Port002",
    cleaning_needed: "Yes",
    last_cleaned: "2025-09-25"
  }
];

// 🏢 Depot Assignments
export const depots = [
  {
    train_id: "Port001",
    depot: "Depot A",
    track_no: 1
  },
  {
    train_id: "Port002",
    depot: "Depot B",
    track_no: 3
  }
];