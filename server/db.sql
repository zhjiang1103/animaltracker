--
-- PostgreSQL database dump
--
-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    idle_in_transaction_session_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SELECT
    pg_catalog.set_config('search_path', '', false);

SET
    check_function_bodies = false;

SET
    xmloption = content;

SET
    client_min_messages = warning;

SET
    row_security = off;

SET
    default_tablespace = '';

SET
    default_table_access_method = heap;

--
-- Name: species; Type: TABLE; Schema: public; Owner: -
--
CREATE TABLE species (
    species_id SERIAL PRIMARY KEY,
    commonName varchar(255),
    scientificName varchar(255),
    numInWild INT,
    CSCode varchar(10),
    createAt timestamp
);

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--
CREATE SEQUENCE public.species_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--
ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;

--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: -
--
ALTER TABLE
    ONLY public.species
ALTER COLUMN
    id
SET
    DEFAULT nextval('public.species_id_seq' :: regclass);

--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: -
--
COPY public.species (id, commonName, ScientificName, numInWild, CSCode, createAt)
FROM
    stdin;

\.--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--
SELECT
    pg_catalog.setval('public.species_id_seq', 1, false);

--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--
ALTER TABLE
    ONLY public.species
ADD
    CONSTRAINT species_pkey PRIMARY KEY (id);

--
-- PostgreSQL database dump complete
--