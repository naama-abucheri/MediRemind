CREATE TABLE appointments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_name text NOT NULL,
  doctor_name text NOT NULL,
  appointment_date timestamptz NOT NULL,
  contact_info text NOT NULL, -- phone or WhatsApp number
  reminder_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
