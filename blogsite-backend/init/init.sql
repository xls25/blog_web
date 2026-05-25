--
-- PostgreSQL database dump
--

\restrict 7q8p0dSCLv7fEgEpgC9rAGXx0I52mSoAb3gF43PTCnBfAZbyj0x82BjfueumkOY

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-25 19:07:12 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 233 (class 1259 OID 16535)
-- Name: actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    content text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    score bigint DEFAULT 0 NOT NULL
);


ALTER TABLE public.actions OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16534)
-- Name: actions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.actions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.actions_id_seq OWNER TO postgres;

--
-- TOC entry 4569 (class 0 OID 0)
-- Dependencies: 232
-- Name: actions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.actions_id_seq OWNED BY public.actions.id;


--
-- TOC entry 229 (class 1259 OID 16489)
-- Name: chat_members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_members (
    chat_id bigint NOT NULL,
    "user_Id" bigint NOT NULL
);


ALTER TABLE public.chat_members OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16487)
-- Name: chat_members_chat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_members_chat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chat_members_chat_id_seq OWNER TO postgres;

--
-- TOC entry 4570 (class 0 OID 0)
-- Dependencies: 227
-- Name: chat_members_chat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_members_chat_id_seq OWNED BY public.chat_members.chat_id;


--
-- TOC entry 228 (class 1259 OID 16488)
-- Name: chat_members_user_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."chat_members_user_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."chat_members_user_Id_seq" OWNER TO postgres;

--
-- TOC entry 4571 (class 0 OID 0)
-- Dependencies: 228
-- Name: chat_members_user_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."chat_members_user_Id_seq" OWNED BY public.chat_members."user_Id";


--
-- TOC entry 226 (class 1259 OID 16478)
-- Name: chats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chats (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.chats OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16477)
-- Name: chats_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chats_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chats_id_seq OWNER TO postgres;

--
-- TOC entry 4572 (class 0 OID 0)
-- Dependencies: 225
-- Name: chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chats_id_seq OWNED BY public.chats.id;


--
-- TOC entry 234 (class 1259 OID 16566)
-- Name: followers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.followers (
    user_id bigint NOT NULL,
    followed_id bigint NOT NULL
);


ALTER TABLE public.followers OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16440)
-- Name: highlights; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.highlights (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    content text NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.highlights OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16439)
-- Name: highlights_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.highlights_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.highlights_id_seq OWNER TO postgres;

--
-- TOC entry 4573 (class 0 OID 0)
-- Dependencies: 221
-- Name: highlights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.highlights_id_seq OWNED BY public.highlights.id;


--
-- TOC entry 231 (class 1259 OID 16509)
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    id bigint NOT NULL,
    chat_id bigint NOT NULL,
    sender_id bigint NOT NULL,
    content text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    is_read boolean DEFAULT false NOT NULL
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16508)
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.messages_id_seq OWNER TO postgres;

--
-- TOC entry 4574 (class 0 OID 0)
-- Dependencies: 230
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;


--
-- TOC entry 224 (class 1259 OID 16459)
-- Name: stories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stories (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    content text NOT NULL,
    expires_at timestamp without time zone NOT NULL
);


ALTER TABLE public.stories OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16458)
-- Name: stories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stories_id_seq OWNER TO postgres;

--
-- TOC entry 4575 (class 0 OID 0)
-- Dependencies: 223
-- Name: stories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stories_id_seq OWNED BY public.stories.id;


--
-- TOC entry 220 (class 1259 OID 16408)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying(20) NOT NULL,
    birth_date date NOT NULL,
    password character varying(255) NOT NULL,
    is_admin boolean DEFAULT false NOT NULL,
    description character varying(150) DEFAULT NULL::character varying,
    prestige_point bigint DEFAULT 0 NOT NULL,
    email character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16407)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4576 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4374 (class 2604 OID 16538)
-- Name: actions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions ALTER COLUMN id SET DEFAULT nextval('public.actions_id_seq'::regclass);


--
-- TOC entry 4370 (class 2604 OID 16492)
-- Name: chat_members chat_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_members ALTER COLUMN chat_id SET DEFAULT nextval('public.chat_members_chat_id_seq'::regclass);


--
-- TOC entry 4371 (class 2604 OID 16493)
-- Name: chat_members user_Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_members ALTER COLUMN "user_Id" SET DEFAULT nextval('public."chat_members_user_Id_seq"'::regclass);


--
-- TOC entry 4369 (class 2604 OID 16481)
-- Name: chats id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats ALTER COLUMN id SET DEFAULT nextval('public.chats_id_seq'::regclass);


--
-- TOC entry 4367 (class 2604 OID 16443)
-- Name: highlights id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.highlights ALTER COLUMN id SET DEFAULT nextval('public.highlights_id_seq'::regclass);


--
-- TOC entry 4372 (class 2604 OID 16512)
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);


--
-- TOC entry 4368 (class 2604 OID 16462)
-- Name: stories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stories ALTER COLUMN id SET DEFAULT nextval('public.stories_id_seq'::regclass);


--
-- TOC entry 4363 (class 2604 OID 16411)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4562 (class 0 OID 16535)
-- Dependencies: 233
-- Data for Name: actions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4558 (class 0 OID 16489)
-- Dependencies: 229
-- Data for Name: chat_members; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4555 (class 0 OID 16478)
-- Dependencies: 226
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4563 (class 0 OID 16566)
-- Dependencies: 234
-- Data for Name: followers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4551 (class 0 OID 16440)
-- Dependencies: 222
-- Data for Name: highlights; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4560 (class 0 OID 16509)
-- Dependencies: 231
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4553 (class 0 OID 16459)
-- Dependencies: 224
-- Data for Name: stories; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4549 (class 0 OID 16408)
-- Dependencies: 220
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, username, birth_date, password, is_admin, description, prestige_point, email) VALUES (12, 'xls', '2007-12-18', 'adminS123', true, NULL, 0, 'abelszolnoki25@gmail.com');
INSERT INTO public.users (id, username, birth_date, password, is_admin, description, prestige_point, email) VALUES (13, 'banban', '2008-04-26', 'adminG123', true, NULL, 0, 'gaspardani719@gmail.com');
INSERT INTO public.users (id, username, birth_date, password, is_admin, description, prestige_point, email) VALUES (14, 'test1', '2002-12-18', 'Test1', false, NULL, 0, 'test1@gmail.com');
INSERT INTO public.users (id, username, birth_date, password, is_admin, description, prestige_point, email) VALUES (15, 'test2', '2009-04-26', 'Test2', false, NULL, 0, 'test2@gmail.com');


--
-- TOC entry 4577 (class 0 OID 0)
-- Dependencies: 232
-- Name: actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actions_id_seq', 1, false);


--
-- TOC entry 4578 (class 0 OID 0)
-- Dependencies: 227
-- Name: chat_members_chat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_members_chat_id_seq', 1, false);


--
-- TOC entry 4579 (class 0 OID 0)
-- Dependencies: 228
-- Name: chat_members_user_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."chat_members_user_Id_seq"', 1, false);


--
-- TOC entry 4580 (class 0 OID 0)
-- Dependencies: 225
-- Name: chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chats_id_seq', 1, false);


--
-- TOC entry 4581 (class 0 OID 0)
-- Dependencies: 221
-- Name: highlights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.highlights_id_seq', 1, false);


--
-- TOC entry 4582 (class 0 OID 0)
-- Dependencies: 230
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.messages_id_seq', 1, false);


--
-- TOC entry 4583 (class 0 OID 0)
-- Dependencies: 223
-- Name: stories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stories_id_seq', 1, false);


--
-- TOC entry 4584 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- TOC entry 4389 (class 2606 OID 16549)
-- Name: actions actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (id);


--
-- TOC entry 4385 (class 2606 OID 16497)
-- Name: chat_members chat_members_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_members
    ADD CONSTRAINT chat_members_pkey PRIMARY KEY (chat_id, "user_Id");


--
-- TOC entry 4383 (class 2606 OID 16486)
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY (id);


--
-- TOC entry 4391 (class 2606 OID 16572)
-- Name: followers followers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT followers_pkey PRIMARY KEY (user_id, followed_id);


--
-- TOC entry 4379 (class 2606 OID 16451)
-- Name: highlights highlights_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.highlights
    ADD CONSTRAINT highlights_pkey PRIMARY KEY (id);


--
-- TOC entry 4387 (class 2606 OID 16523)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 4381 (class 2606 OID 16471)
-- Name: stories stories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stories
    ADD CONSTRAINT stories_pkey PRIMARY KEY (id);


--
-- TOC entry 4377 (class 2606 OID 16425)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4398 (class 2606 OID 16550)
-- Name: actions fk_actions_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT fk_actions_userid FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 4394 (class 2606 OID 16503)
-- Name: chat_members fk_chatmembers_chatid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_members
    ADD CONSTRAINT fk_chatmembers_chatid FOREIGN KEY (chat_id) REFERENCES public.chats(id);


--
-- TOC entry 4395 (class 2606 OID 16498)
-- Name: chat_members fk_chatmembers_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_members
    ADD CONSTRAINT fk_chatmembers_userid FOREIGN KEY ("user_Id") REFERENCES public.users(id);


--
-- TOC entry 4399 (class 2606 OID 16578)
-- Name: followers fk_followed_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT fk_followed_userid FOREIGN KEY (followed_id) REFERENCES public.users(id);


--
-- TOC entry 4392 (class 2606 OID 16453)
-- Name: highlights fk_highlights_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.highlights
    ADD CONSTRAINT fk_highlights_userid FOREIGN KEY (user_id) REFERENCES public.users(id) NOT VALID;


--
-- TOC entry 4396 (class 2606 OID 16529)
-- Name: messages fk_messages_chatid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT fk_messages_chatid FOREIGN KEY (chat_id) REFERENCES public.chats(id);


--
-- TOC entry 4397 (class 2606 OID 16524)
-- Name: messages fk_messages_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT fk_messages_userid FOREIGN KEY (sender_id) REFERENCES public.users(id);


--
-- TOC entry 4393 (class 2606 OID 16472)
-- Name: stories fk_stories_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stories
    ADD CONSTRAINT fk_stories_userid FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 4400 (class 2606 OID 16573)
-- Name: followers pk_follower_userid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT pk_follower_userid FOREIGN KEY (user_id) REFERENCES public.users(id);


-- Completed on 2026-05-25 19:07:12 CEST

--
-- PostgreSQL database dump complete
--

\unrestrict 7q8p0dSCLv7fEgEpgC9rAGXx0I52mSoAb3gF43PTCnBfAZbyj0x82BjfueumkOY

