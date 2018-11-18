--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.8
-- Dumped by pg_dump version 9.6.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: mail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mail (
    "to" integer NOT NULL,
    "from" integer NOT NULL,
    message character varying(4000),
    attachment character varying(256),
    subject character varying(40) NOT NULL,
    unread boolean,
    from_name character varying(100) NOT NULL
);


ALTER TABLE public.mail OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    password character varying(30) NOT NULL,
    first_name character varying(40) NOT NULL,
    second_name character varying(40) NOT NULL,
    email character varying(60) NOT NULL,
    security_question character varying(400) NOT NULL,
    security_answare character varying(40) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: mail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mail ("to", "from", message, attachment, subject, unread, from_name) FROM stdin;
1	4	Hai noroc		welcome	t	Ionescu Gigescu
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, first_name, second_name, email, security_question, security_answare) FROM stdin;
4	gigel	gigel	gigel	gigescu	gigel_bo$$@VK.com	What was the make of your first car ?	dacia1300
11	alex	alexalex	alex	alexander	alexBoss@VK.com	What was the make of your first car ?	dacia1300
13	alex2	alexalex	alex	alexander	alexBoss2@VK.com	What was the make of your first car ?	dacia1300
14	alex3	alexalex	alex	alexander	alexBoss3@VK.com	What was the make of your first car ?	dacia1300
15	gigel2	gigel	gigel	gigescu	gigel_bo$$2@VK.com	What was the make of your first car ?	dacia1300
16	gigel3	gigel	gigel	gigescu	gigel_bo$$3@VK.com	What was the make of your first car ?	dacia1300
17	kkktmlkLNLF	kkktmlkLNLF	kkktmlkLNLF	kkktmlkLNLF	kkktmlkLNLF@VK.com	What was the make of your first car ?	kkktmlkLNLF
18	asasasa	asasasa	asasasa	asasasa	asasasa@VK.com	What was the make of your first car ?	asasasa
19	finaltest	finaltest	finaltest	finaltest	finaltest@VK.com	What was your first pet?	finaltest
20	florian	florian	florian	florian	florian@VK.com	What was the make of your first car ?	florian
21	userTest	cacat	User	Test	userTest@VK.com	What was your first pet?	cacat
22	ionescu	ionescu	Ionescu	Gigescu	ionescu@VK.com	What was the make of your first car ?	ferrari
1	ciprian	mercedes	Ciprian	Mantu	ciprian.mantu@VK.com	What was the make of your first car?	Logan
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 22, true);


--
-- Name: mail mail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mail
    ADD CONSTRAINT mail_pkey PRIMARY KEY ("to");


--
-- Name: users unique_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: users unique_username; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- PostgreSQL database dump complete
--

